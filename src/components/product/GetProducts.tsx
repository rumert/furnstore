import { db } from "../../../lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function GetProducts( room: any ) {
  
  try {
    const colRef = collection(db, "products", "4381VtlCGuvDIqoGZHMc", room)
    const snap = await getDocs(colRef)
    let data: any = []
    snap.forEach((doc) => {
      data.push( doc.data() )
    });

    return JSON.parse(JSON.stringify( { data } ))
  } catch (error: any) {
      console.log(error)
    } 
}
