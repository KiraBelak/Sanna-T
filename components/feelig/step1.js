import { useState } from "react";

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
  { name: "Asustado", emoji: "😨" }
];

export default function Step1() {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  function handleFeelingClick(feeling) {
    setSelectedFeeling(feeling);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">¿Cómo te sientes hoy?</h1>
      <div className="grid grid-cols-5 gap-4">
        {feelings.map((feeling) => (
          <button
            key={feeling.name}
            onClick={() => handleFeelingClick(feeling)}
            className={`p-8 rounded-full ${
              selectedFeeling?.name === feeling.name
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            <span className="text-2xl">{feeling.emoji}</span>
            <span className="block">{feeling.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
