import { getFirestore, getDocs, addDoc, deleteDoc, collection, getDoc, query, where } from "firebase/firestore";
import { app } from './FirebaseConfig';

const db = getFirestore(app);

export async function obterCurtidas(movieId, userEmail) {
  const resposta = await getDocs(
    query(
      collection(db, "curtidas"),
      where("idFilme", '==', movieId),
      where("email", '==', userEmail),
    )
  );
  return resposta.docs;
}

export async function curtir(movieId, userEmail, tituloFilme) {
  const curtidas = await obterCurtidas(movieId, userEmail);

  // Verifica se o filme já foi curtido pelo mesmo usuário
  const jaCurtido = curtidas.some((curtida) => curtida.data().email === userEmail && curtida.data().idFilme === movieId);

  if (jaCurtido) {
    console.log('O filme já foi curtido pelo mesmo usuário');
    return;
  }

  // Adiciona o documento ao Firestore com o título do filme
  await addDoc(collection(db, 'curtidas'), { idFilme: movieId, email: userEmail, titulo: tituloFilme });

  console.log('Filme curtido com sucesso');
}

export async function descurtir(movieId, userEmail) {
  const curtida = await obterCurtidas(movieId, userEmail);

  if (curtida.length > 0) {
    const doc = curtida[0];

    await deleteDoc(doc.ref);
    console.log("Filme descurtido");
  }
}
