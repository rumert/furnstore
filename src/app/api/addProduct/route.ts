import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../../lib/firebase/firebase";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"; 

export async function POST(req: Request) {
    try {
        const data: any = await req.formData()

        const name = data.get('name'),
              price = data.get('price'),
              width = data.get('width'),
              height = data.get('height'),
              room = data.get('room'),
              file = data.get('file');

        const docRef = await addDoc(collection(db, "products"), {
            name,
            price,
            width,
            height,
            room,
            createdAt: serverTimestamp()
        })

        const id = docRef.id
        const imageRef = ref(storage, `images/${room}/${id}`)
        await uploadBytes(imageRef, file)
        const url = await getDownloadURL(imageRef)

        await updateDoc(docRef, { id, url })
        
        return Response.json('OK')
    } catch (err: any) {
        console.error('firebase error:', err);
        return new Response(err.message, { status: 500 })
    }
}