import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut as _signOut, updateProfile} from 'firebase/auth';
import { auth } from './firebase';

export default async function signInEmPass(email: string, password: string) {   
    
    const result = await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password
    return { result }; // Return the sign-in result and error (if any)
}

export async function signOut() {
    return auth._signOut();
}

export async function signUpEmPass(email: any, password: any) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(auth.currentUser)
    return cred.user
}