import MainLayout from "@/components/layouts/MainLayout";
import clientPromise from "@/lib/mongodb";
import OfflineButton from "@/components/common/OfflineButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartIcon } from "@heroicons/react/outline";
import "material-icons/iconfont/material-icons.css";
import {Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import ParticlesBackground from "../components/common/ParticulesBg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { set } from "date-fns";
//SERVER EXAMPLE OF MONGODB CONNECTION
export async function getServerSideProps(context) {
  try {
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
  const [princ, setPrinc] = useState(false);
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

  var saludo = "";

  if (tiempo.getHours() >= 0 && tiempo.getHours() < 12) {
    saludo = "buenos días";
  } else if (tiempo.getHours() >= 12 && tiempo.getHours() < 19) {
    saludo = "buenas tardes";
  } else {
    saludo = "buenas noches";
  }

  console.log("wenas" + saludo);
const [loading, setLoading] = useState(true);
const [loading2, setLoading2] = useState(false);
 setTimeout(() => {
    setLoading(false);
    setTimeout(() => {
      setPrinc(true);
      setLoading2(true);
    }, 500);
  }, 2600);

  


  return (
    <>
      <Toaster position="bottom-center" />
    {princ==true ?  <MainLayout>
      <ParticlesBackground />
      {session ? (
        <Transition
        show={princ}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0" className="flex flex-col items-center box-border h-full min-h-screen bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel">
          {/* {// Landing page} */}
        <div className="flex flex-col items-center justify-center mt-0">
          <h1 className="text-3xl font-extrabold justify-center text-center text-black mb-2" style={{fontFamily: "Roboto"}}>Hola {session.user.name? session.user.name : (
           <Link href="/user/profile">
           <a className="flex flex-row items-center justify-center bg-gen-azul">
              {"->"} Edita tu nombre {"<-"}
            </a>
            </Link>
          )}</h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-2">
          <h1 className="text-3xl font-extrabold justify-center text-center text-black mb-2" style={{fontFamily: "Roboto"}}>¿Cómo te sientes hoy?</h1>
          <Link href="/user/feelings">
          <a className="bg-gen-rosita hover:bg-gen-rositaClaro text-white font-bold mb-2 py-2 px-4 rounded hover:bg-gen-rosaPastel shadow-lg shadow-slate-800">Empezar </a>
          </Link>

          </div>

          <div className="flex flex-col items-center justify-center mt-2">
          <h1 className="text-2xl font-extrabold justify-center text-center text-black mb-2" style={{fontFamily: "Roboto"}}>¿Que quieres hacer hoy?</h1>
          <div className="flex flex-row items-center flex-wrap justify-center">
          <Link href="/menu/actividads">
          <a className="hover:bg-gen-azul bg-gen-rosaPastel text-white font-bold mx-2 mb-2 py-2 px-4 rounded shadow-lg shadow-slate-600">Actividades </a>
          </Link>
          <Link href="/menu/meditaciones">
          <a className="hover:bg-gen-azul bg-gen-rosaPastel text-white font-bold mx-2 mb-2 py-2 px-4 rounded shadow-lg shadow-slate-600">Meditaciones </a>
          </Link>
          <Link href="/menu/musica">
          <a className="hover:bg-gen-azul bg-gen-rosaPastel text-white font-bold mx-2 mb-2 mt-3 py-2 px-4 rounded shadow-lg shadow-slate-600">Música </a>
          </Link>
          <Link href="/menu/juegos">
          <a className="hover:bg-gen-azul bg-gen-rosaPastel text-white font-bold mx-2 mb-2 mt-3 py-2 px-4 rounded shadow-lg shadow-slate-600">Juegos </a>
          </Link>
          <Link href="/menu/terapia">
          <a className="hover:bg-gen-azul bg-gen-rosaPastel text-white font-bold mx-2 mb-2 mt-3 py-2 px-4 rounded shadow-lg shadow-slate-600">Terapia </a>
          </Link>
        
          <Link href="/menu/buscarterapeuta">
          <a className="hover:bg-gen-azul bg-gen-rosaPastel text-white font-bold mx-2 mb-2 mt-3 py-2 px-4 rounded shadow-lg shadow-slate-600">Busca un terapeuta </a>
          </Link>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-3">
            <h1 className="text-2xl font-extrabold justify-center text-center text-black mb-2" style={{fontFamily: "Roboto"}}>¿Quieres ver tu progreso?</h1>
            <Link href="/user/progress">
            <a className="bg-gen-rosita hover:bg-gen-rositaClaro text-white font-bold mb-2 py-2 px-4 rounded hover:bg-gen-rosaPastel shadow-lg shadow-slate-800">Ver progreso </a>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center mt-3 mb-10">
            <img
              src="/logo.png"
              alt="logo"
              className="w-40 h-40 mb-4 mt-4"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            />
            <h1
              className="text-3xl font-extrabold justify-center text-center text-black mb-2"
              style={{fontFamily: "Roboto"}}
            >
              ¿Quieres saber más sobre nosotros?
            </h1>
            <Link href="/about">
            <a className="bg-gen-rosita hover:bg-gen-rositaClaro text-white font-bold mb-2 py-2 px-4 rounded hover:bg-gen-rosaPastel shadow-lg shadow-slate-800">Sobre nosotros </a>
            </Link>
          </div>

         
        </Transition>
      ) : (
        <Transition
          show={princ}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
         className="flex flex-col items-center justify-center bg-slate-400 h-full min-h-screen box-border">
          {/* {// Landing page} */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-32 h-32 mb-4 mt-5"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            />
            <h1
              className="text-3xl font-extrabold justify-center text-center text-black mb-2"
              style={{ fontFamily: "Roboto" }}
            >
              Hola buenas tardes bienvenido a Sanna-T tu espacio seguro para
              sanarte!
            </h1>
            <h2
              className="text-2xl font-normal justify-center text-center text-black mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              {frase}
            </h2>
            <Link href="/api/auth/signin">
              <a className="bg-gen-rosita hover:bg-gen-rositaClaro text-white font-bold mb-2 py-2 px-4 rounded hover:bg-gen-rosaPastel">
                Iniciar Sesión
              </a>
            </Link>

            <h3
              className="text-3xl font-normal justify-center text-center text-black mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              Que es Sana - T
            </h3>
            <p
              className="text-2xl font-normal justify-center text-center text-black mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              Sanna-T es una plataforma que te permite encontrar profesionales
              de la salud mental y bienestar, para que puedas encontrar el
              profesional que mejor se adapte a tus necesidades. y puedas llevar
              un control de tus sesiones y de tu progreso.
            </p>
          </div>
          
            
        </Transition>
      )}

      <OfflineButton />
    </MainLayout>
    :   <Transition
    show={loading}
    enter="transition-opacity duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="flex flex-col items-center justify-center h-screen box-border bg-gen-rosita"
  >
    <img src="/logo.png" className="h-40 w-40" />

    <h1
      className="text-3xl font-extrabold justify-center text-center text-black mb-4"
      style={{ fontFamily: "Roboto" }}
    >
      Hola {saludo} bienvenido a Sanna-T tu espacio seguro para sanarte!
    </h1>
    <h2
      className="text-2xl font-normal justify-center text-center text-black mb-4"
      style={{ fontFamily: "Roboto" }}
    >
      {frase}
    </h2>
    <HeartIcon className="h-20 w-20 text-gen-verdeMenta" />
  </Transition>
    }
    </>
  );
}
