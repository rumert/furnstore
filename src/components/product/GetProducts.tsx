import { db } from "../../../lib/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function GetProducts( room: any ) {
  
  try {
    const colRef = collection(db, "products")
    const q = query(colRef, where("room", "==", room))
    const snap = await getDocs(q)
    let data: any = []
    snap.forEach((doc) => {
      data.push( doc.data() )
    });

    return JSON.parse(JSON.stringify( { data } ))
  } catch (error: any) {
      console.log(error)
    } 
}
