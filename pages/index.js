import MainLayout from "@/components/layouts/MainLayout";
import clientPromise from "@/lib/mongodb";
import OfflineButton from "@/components/common/OfflineButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUserCog, faReceipt, faCamera, faBasketball, faUser } from '@fortawesome/free-solid-svg-icons';
import "material-icons/iconfont/material-icons.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
//SERVER EXAMPLE OF MONGODB CONNECTION
export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    // hola bb
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({ isConnected }) {
 
  const tiempo = new Date();
  const { data: session } = useSession();

//   1. Sé la mejor versión de ti mismo.
// 2. Limpia tu mente del "no puedo".
// 3. Hazlo. Y si te da miedo, hazlo con miedo.
// 4. Trabaja duro en silencio y tu éxito hará todo el ruido.
// 5. Quien tiene magia no necesita trucos.
// 6. Mi paz mental no tiene precio.
// 7. Si puedes soñarlo puedes hacerlo.
// 8. No gastes energías en cosas que no suman.
// 9. El camino al éxito se llama actitud.
// 10. Sonríe para la vida, no solo para la foto.

  const frases = [
    "Sé la mejor versión de ti mismo.",
    "Limpia tu mente del 'no puedo'.",
    "Hazlo. Y si te da miedo, hazlo con miedo.",
    "Trabaja duro en silencio y tu éxito hará todo el ruido.",
    "Quien tiene magia no necesita trucos.",
    "Mi paz mental no tiene precio.",
    "Si puedes soñarlo puedes hacerlo.",
    "No gastes energías en cosas que no suman.",
    "El camino al éxito se llama actitud.",
    "Sonríe para la vida, no solo para la foto.",
  ];

  //traer una frase random de la lista
  function fraseRandom() {
    return frases[Math.floor(Math.random() * frases.length)];
  }

  const [frase, setFrase] = useState(fraseRandom());



  return (
    <MainLayout>
      <Toaster position="bottom-center" />
      {session ? 
        <div className="flex flex-col items-center justify-center">
          {/* {// Landing page} */}
        {/* hola esto es cuando ya esta lggeado */}
       
        </div>
       : <div className="flex flex-col items-center justify-center">
        {/* {// Landing page} */}
          <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-extrabold justify-center text-center text-black mb-4" style={{ fontFamily: "Roboto" }}>
            Hola buenas tardes bienvenido a Sanna-T tu espacio seguro para sanarte!
          </h1>
          <h2 className="text-2xl font-normal justify-center text-center text-black mb-4" style={{ fontFamily: "Roboto" }}>
            {frase}
          </h2>
          <h3 className="text-3xl font-normal justify-center text-center text-black mb-4" style={{ fontFamily: "Roboto" }}>
            Que es Sana - T
          </h3>
            </div>
          </div>
          }

      <OfflineButton />
    </MainLayout>
  );
}
