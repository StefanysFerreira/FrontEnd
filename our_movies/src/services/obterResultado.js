import {getFirestore, getDocs, collection, query, where } from "firebase/firestore"
import { app } from './FirebaseConfig'
const db = getFirestore(app)

export async function obterResultado(userEmail) {
    const q = query(collection(db, "curtidas"), where("email", '==', userEmail));
    const resultadoArray = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

        resultadoArray.push({id: doc.id, ...doc.data()})
    });
    return resultadoArray
}