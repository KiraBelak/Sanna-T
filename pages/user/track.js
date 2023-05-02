import AccountLayout from "@/components/layouts/AccountLayout";
import LoadingCircle from "@/components/common/LoadingCircle";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Chart from "../../components/common/Chart";


const TrackPage = () => {
    const { data: session } = useSession();
    const [track, setTrack] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect (() => {
        async function getAccessToken() {
            if (session && session.user) {
                //get user data from db
                const { data,status } = await axios.get(`/api/feel?email=${session.user.email}`);
                if (status === 200) {
                    console.log("the data is : ",data.data.feels);
                    toast.success("Armando el seguimiento");
                    setTrack(data.data.feels)
                    setIsLoading(true)
                }else if (status === 404) {
                    // console.log("No se encontraron datos");
                    toast.error("No se encontraron datos");
                    setTrack(null)

                }else{
                    toast.error("Error al cargar datos");
                    setTrack(null)
                }

            }
        }
        getAccessToken();
    }, [session]);

    return (
        <AccountLayout title="Seguimiento">
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-3xl font-bold text-gray-900">Seguimiento</h1>
                {track===null ? <div className="text-gray-500 text-center flex flex-col">No se encontraron datos, intenta ingresar el dia de hoy
                <Link href="/user/feelings">
                  <a className="bg-gen-rosita hover:bg-gen-rositaClaro text-white font-bold mb-2 py-2 w-full px-4 rounded hover:bg-gen-rosaPastel shadow-lg shadow-slate-800">
                    Empezar{" "}
                  </a>
                </Link>
                </div> : null }
                {isLoading ? <Chart data={track} /> : <LoadingCircle color="#000000" />}

            </div>
        </AccountLayout>
    );
};

export default TrackPage;