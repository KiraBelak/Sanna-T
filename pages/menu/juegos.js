import MainLayout from "@/components/layouts/MainLayout";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const Games = () => {
  const [snake, setSnake] = useState(false);
  const [Ajedrez, setAjedrez] = useState(false);
  const [flappy, setFlappy] = useState(false);
  return (
    <MainLayout>
      <Transition
        show={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel py-2"
      >
        <main className="flex flex-col items-center w-full flex-1 px-2 text-center">
          <h1 className="text-4xl font-bold">Juegos</h1>
          <p className="mt-3 text-xl font-semibold">
            Te recomendamos juegos que te ayudaran a relajarte y a distraerte
          </p>
          <div className="flex flex-col items-center justify-center w-full my-2">
            <button
              onClick={() => setSnake(!snake)}
              className="bg-gen-menta hover:bg-gen-mentaClaro text-black w-2/3 text-lg font-bold py-2 px-4 rounded-xl my-4"
            >
              Snake
            </button>
          </div>
          {snake == true && (
            <>
              <iframe
                className="rounded-xl my-4"
                src="https://scratch.mit.edu/projects/226445813/embed"
                width="100%"
                height="302"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </>
          )}
          <div className="flex flex-col items-center justify-center w-full my-2">
            <button
              onClick={() => setAjedrez(!Ajedrez)}
              className="bg-gen-menta hover:bg-gen-mentaClaro text-black w-2/3 text-lg font-bold py-2 px-4 rounded-xl my-4"
            >
              Ajedrez
            </button>
          </div>
          {Ajedrez == true && (
            <>
              <iframe
                src="https://scratch.mit.edu/projects/170765002/embed"
                allowtransparency="true"
                width="100%"
                height="322"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </>
          )}
            <div className="flex flex-col items-center justify-center w-full my-2">
            <button
                onClick={() => setFlappy(!flappy)}
                className="bg-gen-menta hover:bg-gen-mentaClaro text-black w-2/3 text-lg font-bold py-2 px-4 rounded-xl my-4"
            >
                Flappy Bird
            </button>
            </div>
            {flappy == true && (
            <>
                <iframe
                src="https://scratch.mit.edu/projects/17828009/embed"
                allowtransparency="true"
                width="100%"
                height="322"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"

                ></iframe>
            </>
            )}
            

        </main>
      </Transition>
    </MainLayout>
  );
};

export default Games;
