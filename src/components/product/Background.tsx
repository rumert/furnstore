import Image from "next/image";
import { db } from "../../../lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function Background({ room }: any) {

  const docRef = doc(db, "products",  "4381VtlCGuvDIqoGZHMc")
  const docSnap: any = await getDoc(docRef)
  const background = docSnap.data().background_links[room]
  const roomHeader = (room == 'livingRoom') ? 'LIVING ROOM' : room

  return (
    <div className='w-full h-[50vh] relative mb-[10vh]'>
        <h1 className={`absolute top-[20%] ${roomHeader == 'kitchen' ? 'left-[20%]' : 'right-[20%]'} text-primary-color-1 text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase`}>
          {roomHeader}
        </h1>
        <Image
        src={background}
        width={2500}
        height={1500}
        alt={`${room} background`}
        className='h-full object-cover'
        />
    </div>
  )
}
