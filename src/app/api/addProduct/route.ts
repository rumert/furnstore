import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../../lib/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 

export async function POST(req: Request) {
    try {
        const data: any = await req.formData()

        const name = data.get('name'),
              price = data.get('price'),
              width = data.get('width'),
              height = data.get('height'),
              room = data.get('room'),
              file = data.get('file');

        const imageRef = ref(storage, `images/${room}/${name}`)
        await uploadBytes(imageRef, file)
        const url = await getDownloadURL(imageRef)

        await addDoc(collection(db, "products", "4381VtlCGuvDIqoGZHMc", room), {
            name: name,
            price: price,
            width: width,
            height: height,
            room: room,
            url: url,
            createdAt: serverTimestamp()
        })

        return Response.json('OK')
    } catch (err: any) {
        console.error('firebase error:', err);
        return new Response(err.message, { status: 500 })
    }
}