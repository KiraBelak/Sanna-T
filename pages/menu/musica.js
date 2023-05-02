import MainLayout from "@/components/layouts/MainLayout";

const Playlist = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel py-2">
        <main className="flex flex-col items-center w-full flex-1 px-2 text-center">
          <h1 className="text-4xl font-bold">Playlist Relajantes</h1>

          <p className="mt-3 text-xl font-semibold">
            Te recomendamos playlist que te ayudaran a relajarte y a
            concentrarte en tus tareas
          </p>
          <iframe
            // style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/5PMWGkEFUn5dJCyTmJDbPz?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl my-4"
          ></iframe>
          <iframe
            className="rounded-xl my-4"
            src="https://open.spotify.com/embed/playlist/4ZQgepEgN2rO6eFUPNZf2l?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            className="rounded-xl my-4"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZhzMp90Opmn?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </main>
      </div>
    </MainLayout>
  );
};

export default Playlist;
