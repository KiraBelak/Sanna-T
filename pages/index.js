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
        <div className="flex flex-col items-center justify-center min-h-screen box-border h-screen">
          {/* {// Landing page} */}
          {/* hola esto es cuando ya esta lggeado */}
        </div>
      ) : (
        <Transition
          show={loading2}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
         className="flex flex-col items-center justify-center bg-slate-400 h-screen box-border">
          {/* {// Landing page} */}
          <div className="flex flex-col items-center justify-center mt-0">
            <img
              src="/logo.png"
              alt="logo"
              className="w-40 h-40 mb-4"
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
