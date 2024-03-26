import { updateProfile } from "firebase/auth";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { signUpEmPass } from "../../../../lib/firebase/auth";
import { db } from "../../../../lib/firebase/firebase";

export async function POST(req: Request) {
    
    try {
        const data = await req.json()

        const usersRef = collection(db, 'users')
        const userQuery = query(usersRef, where("name", "==", data.name), where("surname", "==", data.surname))
        const snap = await getDocs(userQuery)
        if(!snap.empty) { return Response.json( 'There is already an user with these name and surname' ) }

        const user: any = await signUpEmPass(data.email, data.password)
        await updateProfile(user, { displayName: data.name })

        await addDoc(usersRef, {
            name: data.name,
            surname: data.surname,
            email: data.email,
            createdAt: serverTimestamp(),
            uid: user.uid,
            lastLogin: 'never',
        })
        return Response.json( 'User created. Verification email sent!' )
    } catch (error: any) {
        return Response.json(error.message);
    }         
}