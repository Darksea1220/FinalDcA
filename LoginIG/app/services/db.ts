import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {  getFirestore, collection, doc, query, where, getDocs, addDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBA3j4aCPf1Be_CQgMzJda0o86k_f-hdOM",
  authDomain: "prueba1-c6b16.firebaseapp.com",
  projectId: "prueba1-c6b16",
  storageBucket: "prueba1-c6b16.appspot.com",
  messagingSenderId: "940799990467",
  appId: "1:940799990467:web:23879c70140cf9b700e076",
  measurementId: "G-B74ME082SM"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db,"usuarios");
  const postIG = collection(db,"postIG");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }

//Codigo que se encarga de estar escuchando los cambios en la base de datos
export const listenPost = (cb: (post:any) => void) =>{
  try {
    onSnapshot(collection(db, "postIG"), (documentos) => {
      const post = documentos.docs.map( (doc:any) => ({id: doc.id, data: doc.data()}));
      cb(post);
    });
  } catch (error) {
    
  }
}

  export const getPost = async () =>{
    try {
      //Crear arreglo
      const post = [];
      //Hacer la petición a la base de datos a mi colección de post
      const q = query(postIG);
      const querySnapshot = await getDocs(q);

      //Desglosar los documentos de forma individual y guardarlos en el arreglo
      querySnapshot.forEach(doc => {
        post.push({id: doc.id, data: doc.data()});
      });
      return post;
    } catch (error) {
      
    }
  }

  export const addPost = async ({
   profileimg,
   name,
   ubication,
   post,
   views,
   description
  }:{
    profileimg: String
    name: String
    ubication: String
    post: String
    views: String
    description: String
  }) => {
    try {
        const docRef = await addDoc(collection(db,"postIG"),{
          profileimg,
          name,
          ubication,
          post,
          views,
          description
        });
        return true;
    } catch (error) {
      console.log(error);
      
        return false;
    }
  }