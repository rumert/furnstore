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
      switch (error.code) {
        case 'storage/object-not-found':
          console.log("File doesn't exist") 
          break;
        case 'storage/unauthorized':
          console.log("User doesn't have permission to access the object")
          break;
        case 'storage/canceled':
          console.log("User canceled the upload") 
          break;
  
        // ...
  
        case 'storage/unknown':
          console.log("Unknown error occurred, inspect the server response") 
          break;
      }
    }
  
  
}
