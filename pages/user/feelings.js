import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";
import { Button, Box } from "@mui/material";
import { ColorLensOutlined, DeleteOutlineOutlined, UndoOutlined } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { el } from "date-fns/locale";

const Feeling = () => {
  const { data: session } = useSession();
  const [step, setStep] = useState(0);
  const [sentir, setSentir] = useState(null);
  const [porque, setPorque] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [rating, setRating] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [canvasData, setCanvasData] = useState(null);
  const [learning, setLearning] = useState(null);
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");
  //instancia de router
  const router = useRouter();

  
  // const [canvasWidth, setCanvasWidth] = useState(window.innerWidth * 0.8);
  // const [canvasHeight, setCanvasHeight] = useState(window.innerHeight * 0.8);
  const [selectedLearning, setSelectedLearning] = useState(null);
  //traer el dia mes y año actual


  const feelings = [
    { name: "Feliz", emoji: "😊" },
    { name: "Triste", emoji: "😢" },
    { name: "Enojado", emoji: "😠" },
    { name: "Ansioso", emoji: "😰" },
    { name: "Estresado", emoji: "😫" },
    { name: "Agotado", emoji: "😴" },
    { name: "Alegre", emoji: "😃" },
    { name: "Irritado", emoji: "😒" },
    { name: "Preocupado", emoji: "😟" },
    { name: "Aburrido", emoji: "😑" },
    { name: "Nervioso", emoji: "😬" },
    { name: "Desesperado", emoji: "😩" },
    { name: "Esperanzado", emoji: "🤞" },
    { name: "Solitario", emoji: "😔" },
    { name: "Agradecido", emoji: "🙏" },
    { name: "Deprimido", emoji: "😞" },
    { name: "Confundido", emoji: "😕" },
    { name: "Frustrado", emoji: "😤" },
    { name: "Culpable", emoji: "😔" },
    { name: "Asustado", emoji: "😨" },
  ];

  const handleChange = (sentir) => {
    console.log(sentir);
    setSentir(sentir);
    // setStep(1)
  };
  //   useEffect(() => {
  //     console.log(porque);
  //     }, [porque]);

  // useEffect(() => {
  //   function handleResize() {
  //     setCanvasWidth(window.innerWidth * 0.8);
  //     setCanvasHeight(window.innerHeight * 0.8);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  if (step === 0 || sentir === null) {

    return (
      <div className="bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel h-full min-h-screen text-center">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "Inter" }}>
          ¿Cómo me siento hoy?
        </h1>
        <div className="flex flex-wrap justify-center items-center text-center">
          {!sentir &&
            feelings.map((feeling) => (
              <button
                key={feeling.name}
                onClick={() => handleChange(feeling)}
                className={`p-2 rounded-full w-1/4 mx-2 my-2 text-gray-800 text-center hover:bg-gen-verde ${
                  sentir?.name === feeling.name
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                } sm:w-1/3 md:w-1/4 lg:w-1/6`}
              >
                <span className="text-2xl">{feeling.emoji}</span>
                <span className="block text-2xs my-2">{feeling.name}</span>
              </button>
            ))}
          {sentir && (
            <div className="flex flex-col justify-center items-center w-screen box-border">
              <h1 className="text-2xl font-semibold">{sentir.emoji}</h1>
              <h1 className="text-2xl font-semibold mb-6">{sentir.name}</h1>
              <div className="w-full mx-4">
                <TextField
                  id="outlined-basic"
                  label="¿Por qué?"
                  variant="filled"
                  className="w-full mx-4 mb-2 box-border"
                  onChange={(e) => setPorque(e.target.value)}
                />
              </div>
              <div className="flex justify-around items-center">
                <button
                  onClick={() => setStep(1)}
                  disabled={(porque === null || porque === "" || porque.length<5) && true}
                  className="bg-gen-verde text-black mr-4 px-4 py-2 rounded-full my-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
                <button
                  onClick={() => setSentir(null)}
                  className="bg-gen-rosita text-white ml-2 px-4 py-2 rounded-full my-4"
                >
                  Cambiar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const activities = [
    { name: "Escuela 🏫" },
    { name: "Trabajo 💼" },
    { name: "Descanso 🛌" },
    { name: "Café ☕️" },
    { name: "Comida 🍽️" },
    { name: "Fiesta 🎉" },
    { name: "Novio (a) 💑" },
    { name: "Esposo (a) 👫" },
    { name: "Amigos (as) 👥" },
    { name: "Cocinar 🍳" },
    { name: "Conocí a alguien 👋" },
    { name: "Pelis 🎥" },
    { name: "Redes 📱" },
    { name: "Chatear 💬" },
    { name: "Música 🎶" },
    { name: "Caminar 🚶" },
    { name: "Ejercicio 🏋️‍♀️" },
    { name: "Leer 📖" },
    { name: "Gym 🏋️‍♂️" },
    { name: "Dibujar 🎨" },
    { name: "Shopping 🛍️" },
    { name: "Comer 🍕" },
    { name: "Tarea 📚" },
    { name: "Espiritualidad 🙏" },
    { name: "Entretenimiento 🎮" },
  ];

  if (step === 1) {
    const handleActivitySelection = (activity) => {
      //si la actividad ya esta seleccionada, quitarla
      const isActivitySelected = selectedActivity.find(
        (selected) => selected.name === activity.name
      );
      if (isActivitySelected) {
        const newActivity = selectedActivity.filter(
          (selected) => selected.name !== activity.name
        );
        setSelectedActivity(newActivity);
        return;
      }
      //tomar las actividades que ya estan seleccionadas y agregar la nueva
      const newActivity = [...selectedActivity, activity];
      console.log(newActivity);
      setSelectedActivity(newActivity);
      // setSelectedActivity([...activity], activity);
    };

    const handleRatingChange = (rating) => {
      setRating(rating);
    };

    return (
      <div className="bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel h-full min-h-screen text-center">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "Inter" }}>
          ¿Que hiciste hoy?
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {activities.map((activity) => (
            <button
              key={activity.name}
              onClick={() => handleActivitySelection(activity)}
              // p-2 rounded-full w-1/4 mx-2 my-2 text-gray-800 text-center hover:bg-gen-verde
              className={`p-2 my-2 mx-1 rounded-full ${
                selectedActivity.find(
                  (selected) => selected.name === activity.name
                )
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              <span className="text-2xl">{activity.emoji}</span>
              <span className="block">{activity.name}</span>
            </button>
          ))}
        </div>
        {selectedActivity.length > 0 && (
          <div>
            <h2>¿Cómo calificarías tu día de hoy?</h2>
            <div className="flex items-center justify-between">
              <div className="text-red-500 font-bold">1</div>
              <input
                type="range"
                min="1"
                max="11"
                value={rating}
                className="w-full mx-4 appearance-none bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full"
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              <div className="text-green-500 font-bold">10</div>
            </div>
            <div className="text-center font-bold text-lg">{rating}</div>
            {rating > 0 && (
              <button
                onClick={() => setStep(2)}
                className="bg-gen-verde text-black font-bold mr-4 px-4 py-2 rounded-full my-4"
              >
                Continuar
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  if (step === 2) {
    const emotions = [
      { name: "Felicidad", emoji: "😃" },
      { name: "Angustia", emoji: "😰" },
      { name: "Desacuerdo", emoji: "😒" },
      { name: "Tristeza", emoji: "😢" },
      { name: "Enojo", emoji: "😠" },
    ];
    const handleEmotionClick = (emotion) => {
      setSelectedEmotion(emotion);
      setStep(3);
    };
    return (
      <div className="bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel h-full min-h-screen text-center">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "Inter" }}>
          ¿Qué emoción predominó en tu día?
        </h2>
        <div className="flex flex-wrap gap-4">
          {emotions.map((emotion) => (
            <button
              key={emotion.name}
              className={`bg-white w-full box-border mx-4 rounded-full shadow-md p-4 flex items-center justify-center text-2xl ${
                selectedEmotion === emotion
                  ? "ring-2 ring-green-400"
                  : "hover:ring-2 ring-gray-300"
              }`}
              onClick={() => handleEmotionClick(emotion)}
            >
              {emotion.emoji}
              <p className="ml-2">{emotion.name}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 3) {
    const handleSave = () => {
      var dataURL;
      if (selectedLearning === true) {
      dataURL = canvasRef.current.canvasContainer.children[1].toDataURL(); // Convertimos la imagen a una URL
      }else{
        dataURL = null;
      }
      //sacar el dia de hoy
      const today = new Date();

     
      //armar el objeto como clave el dia de hoy
      // console.log(session)
      const usuario = session.user.email;
      const newEntry = {
        [today.toLocaleDateString()]: {
          usuario:usuario,
          sentir:sentir,
          porque:porque,
          actividades: selectedActivity,
          rating: rating,
          emocion: selectedEmotion,
          learning: learning,
          imagen: dataURL,
        },
      };
      //mandar el objeto a la api de api/feel
      const response = async () => {
        const res =await fetch("/api/feel", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          query:usuario,
          body: JSON.stringify(newEntry),
        });
        const data = await res.json();
        console.log("data",data);
        console.log("res",res);
        if (res.status === 200) {
          toast.success("Se guardó tu registro");
          } else if (res.status === 400){
            toast.error("Ya registraste tu día de hoy");
          }else{
            toast.error("Ocurrió un error");
          }
        router.push("/");

        
      };
      response();
      
      // console.log(newEntry);



      setCanvasData(dataURL);
    };

    const handleClear = () => {
      setCanvasData(null);
    };
    const handleColorChange = (e) => {
      setColor(e.target.value);
    };

    return (
      <div className="bg-gradient-to-br from-gen-rosita via-gen-menta flex flex-col justify-center items-center to-gen-rosaPastel h-full min-h-screen text-center">
      <Toaster position="bottom-center" />
      {(selectedLearning==null) && (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold" style={{ fontFamily: "Inter" }}>
                ¿Aprendiste algo nuevo hoy?
            </h2>
            <div className="flex flex-wrap">
                <button
                    className={`bg-white w-full box-border mx-4 rounded-full shadow-md p-4 flex items-center justify-center text-2xl ${
                    selectedLearning === true
                        ? "ring-2 ring-green-400"
                        : "hover:ring-2 ring-gray-300"
                    }`}
                    onClick={() => setSelectedLearning(true)}
                >
                    <p className="ml-2">Si</p>
                </button>
                <button
                    className={`bg-white w-full box-border mx-4 rounded-full shadow-md p-4 flex items-center justify-center text-2xl ${
                    selectedLearning === "No"
                        ? "ring-2 ring-green-400"
                        : "hover:ring-2 ring-gray-300"
                    }`}
                    onClick={() => setSelectedLearning(false)}
                >
                    <p className="ml-2">No</p>
                </button>
            </div>
        </div>
            )}
            {selectedLearning ? (
         <Box sx={{   display: "grid",
         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
     
         boxSizing: "border-box",}}>
         <h1 style={{ fontFamily: "Inter", fontSize: "2.25rem" }}>
           ¿Qué aprendiste hoy?
         </h1>
         <textarea
           placeholder="Escribe aquí lo que aprendiste"
           value={learning}
           className="border-2 rounded-xl border-gen-menta w-full box-border"
           onChange={(e) => setLearning(e.target.value)}
           style={{ marginTop: "1rem", padding: "0.5rem", fontFamily: "Inter" }}
         />
         <h2 style={{ fontFamily: "Inter", fontSize: "1.5rem", marginTop: "2rem" }}>
           Puedes dibujarlo
         </h2>
         <div style={{ marginTop: "1rem" }}>
           <CanvasDraw
             ref={canvasRef}
             canvasWidth={310}
             canvasHeight={500}
             brushRadius={2}
             lazyRadius={0}
             brushColor={color}
             style={{ border: "2px solid #4CAF50", borderRadius: "8px",boxSizing: "border-box" }}
           />
           <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
             <Button
               variant="contained"
               startIcon={<DeleteOutlineOutlined />}
               onClick={() => canvasRef.current.clear()}
               sx={{ backgroundColor: "#FF6347", color: "#FFF" }}
             >
               Borrar
             </Button>
             <input
               type="color"
               value={color}
               onChange={handleColorChange}
               sx={{ width: "50px", height: "50px", padding: "0" }}
             />
             <Button
               variant="contained"
               startIcon={<UndoOutlined />}
               onClick={() => {
                 canvasRef.current.undo();
               }}
               sx={{ backgroundColor: "#4CAF50", color: "#FFF" }}
             >
                Deshacer
             </Button>
           </Box>
           <Button variant="contained" onClick={handleSave} sx={{ marginTop: "1rem" }}>
             Guardar
           </Button>
         </div>
         {/* {canvasData && (
           <img
             src={canvasData}
             alt="Dibujo guardado"
             style={{ display: "block", margin: "1rem auto", maxWidth: "100%" }}
           />
         )} */}
       </Box>
                ):(
                  selectedLearning==false && (
                  <div className="flex flex-col justify-center items-center">
                  <h2 className="text-3xl font-semibold" style={{ fontFamily: "Inter" }}>
                    Todos los días  se aprende algo nuevo, solo falta verlo con otros ojos.
                    <br />
                    !Mañana será un mejor día!
                  </h2>

                  <Button variant="contained" onClick={handleSave} sx={{ marginTop: "1rem" }}>
             Enviar registro
           </Button>  
                  </div>
                )
                )
                
                }
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel h-screen text-center">
      <h1>How are you sxfeeling today?</h1>
    </div>
  );
};
export default Feeling;
