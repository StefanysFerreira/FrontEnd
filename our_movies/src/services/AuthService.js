import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth'

import { app } from '../services/FirebaseConfig'
import '../pages/EstiloLogin.css'

const auth = getAuth(app)

export async function login(email, senha) {
    return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) =>{
    userCredential.user.uid
    })  
    .catch((error) => {
        if(error.code == 'auth/wrong-password') {
            throw Error('Senha Inválida') 
        } else if(error.code == 'auth/user-not-found') {
            throw Error('Usuário não encontrado')
        }else {
            throw Error('Muitas tentativas!')
        }
    })
}

export async function logout(){
    await signOut(auth)
}

export async function registrar(nome, email, senha) {
    return await createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) =>{
        // updateProfile(userCredential, {displayName: ""})
    userCredential.user.uid
    })  
    .catch((error) => {
        if(error.code == 'auth/invalid-email') {
            throw Error('Email inválido!')
        } else if(error.code == 'auth/email-already-in-use') {
            throw Error('Email já cadastrado!')
        }else if  (error.code == 'auth/empty-name'){
            throw Error('Nome Obrigatório!')
        } else {
            throw Error('Deu ruim')
        }
    })
}