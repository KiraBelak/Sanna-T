import React, { useState, useEffect, useRef } from 'react';
import CameraPage from './Camera';
import Camarita from './Camarita';
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { stringify } from 'querystring';



const CameraContainer = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const { data: session } = useSession();
  const [fotos, setFotos] = useState([]);
  const cameraRef = useRef(null);
  const imgRef = useRef(null);

  //hacewr un get para traer las publicaciones
  
  useEffect(() => {
    console.log("useEffect")
    console.log("fotos", fotos)
  }, [fotos]);

    //funcion asincrona para mandar la foto a la api
    async function toma(dataUri, camara) {
    //   const owner = session.user.email;
    //   const tiempo = new Date();
    //   const name = session.user.name;
    //   const img = session.user.image;


 
    // //añade la foto a la lista de fotos
    // setFotos([...fotos, dataUri]);

  

      // crea un objeto FormData para enviar el archivo
     
    
      // envía la solicitud POST con FormData
      // const res = await axios.post('/api/publicaciones',{
      //   owner,
      //   tiempo,
      //   name,
      //   img,
      //   imageBuffer
      // });
    
      // console.log('res', res);
      // toast.success('Foto tomada');
      // router.push('/');
    }
    

    const takePicture = () => {
      cameraRef.current.capture()
        .then(blob => {
          imgRef.current.src = URL.createObjectURL(blob);
          imgRef.current.onload = () => { URL.revokeObjectURL(imgRef.current.src); }
        })
    }
 
  


  
  return (
    <div className="relative h-screen">
      {capturedImage ? (
        <div className="fixed top-0 right-0 p-4">
          <img src={capturedImage} alt="Captured" />
        </div>
      ) : (
        <>
          <section>
            <div className="absolute top-0 right-0">
              <Camarita toma={toma} />
            </div>
            <div className="absolute top-0 left-0 w-1/4 h-1/4">
              <CameraPage  toma={toma} takePicture={takePicture} cameraRef={cameraRef} imgRef={imgRef} />
            </div>
          </section>
      
        </>
      )}
    </div>
  );
};

export default CameraContainer;
