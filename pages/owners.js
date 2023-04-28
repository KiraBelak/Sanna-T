import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "../components/common/ParticulesBg";

const owners = [
  {
    name: "Kaleb Rodriguez",
    description: " Programador 🧑‍💻, fotografo 📷, diseñador 🖍️, viajero ✈️, soñador 🤞. Me gusta aprender absolutamente de todo! Vamos por una comunidad mas fit! 💪",
    photoSrc: "/creadores/kaleb.jpg",
    // materia:"Taller de investigacion 2 & Temas selectos de desarrollo de software",
  },
  {
    name: "Alondra Villalobos",
    description: "Próxima IGE, creativa, sonriente, carismática, y dispuesta a ayudar. Creo que la mente es increíble y poderosa, debemos de cuidarla y tratarla con amor.",
    photoSrc: "/creadores/alondra.jpg",
  },
  {
    name:"Abraham Murguía",
    description:"Líder nato capaz de afrontar nuevos retos y salir de su zona de confort, carismático, servicial y muy responsable. Creo que invertir en las personas es lo más importante hoy en día, seamos ese impulso para la sociedad.",
    photoSrc:"/creadores/abraham.jpg",
  },
  {
    name:"Omar Miranda",
    description:"Ingeniero en Gestión empresarial, con habilidades de dirección esto acompañado de creatividad y facilidad de aprender, así como adaptabilidad para desempeñarme de manera eficiente en distintas áreas para la realización de objetivos, con un interés en el capital humano y su bienestar físico y mental.",
    photoSrc:"/creadores/omar.jpg",
  },
  {
    name:"Johana Trejo",
    description:"Ingeniera en Gestión Empresarial con altas cualidades de liderazgo, facilidad de aprendizaje, proactiva, carismática, alegre y servicial, hay que ser el cambio que queremos en la sociedad y amar lo que hacemos.",
    photoSrc:"/creadores/johana.jpg",
  }
];

export default function Owners() {
  return (
    <MainLayout>
                <ParticlesBackground />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 pb-8 bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel">
        <main className="flex flex-col items-center justify-center flex-1 px-6 sm:px-10 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Conoce a nuestro equipo
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {owners.map((owner) => (
              <div
                key={owner.name}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={owner.photoSrc}
                    alt={`Foto de ${owner.name}`}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{owner.name}</h2>
                  <p className="mt-2 text-md text-gray-300">{owner.materia}</p>
                  <p className="mt-2 text-md">{owner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
