import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../../lib/firebase/firebase";
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 

export async function POST(req: Request) {
    try {
        const data: any = await req.formData()

        const name = data.get('name'),
              price = data.get('price'),
              width = data.get('width'),
              height = data.get('height'),
              room = data.get('room'),
              file = data.get('file'),
              id = data.get('id'),
              newRoom = data.get('newRoom'),
              description = data.get('description'),
              docRef = doc(db, "products", id);
        
        if (name) {
            await updateDoc(docRef, { name: name })
        } else if (price) {
            await updateDoc(docRef, { price }) 
        } else if (file) {
            const imageRef = ref(storage, `images/${room}/${id}`)
            await deleteObject(imageRef)
            await uploadBytes(imageRef, file)
            const url = await getDownloadURL(imageRef)
            await updateDoc(docRef, { width, height, url }) 
        } else if (newRoom) {
            const oldImageRef = ref(storage, `images/${room}/${id}`)
            const newImageRef = ref(storage, `images/${newRoom}/${id}`)
            const oldUrl = await getDownloadURL(oldImageRef)
            const blob = await (await fetch(oldUrl)).blob()
            await uploadBytes(newImageRef, blob)      
            await deleteObject(oldImageRef)
            const newUrl = await getDownloadURL(newImageRef)
            const oldDocSnap = await getDoc(docRef)
            const newDocRef = doc(db, "products", id)
            await setDoc(newDocRef, {...oldDocSnap.data(), room: newRoom, url: newUrl})
            await deleteDoc(docRef)
        } else if (description) {
            await updateDoc(docRef, { description })
        }

        return Response.json('OK')
    } catch (err: any) {
        console.error('firebase error:', err);
        return new Response(err.message, { status: 500 })
    }
}