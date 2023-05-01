import AccountLayout from "@/components/layouts/AccountLayout";
import LoadingCircle from "@/components/common/LoadingCircle";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


const TrackPage = () => {
    const { data: session } = useSession();

    // useEffect (() => {
    //     async function getAccessToken() {
    //         if (session && session.user) {
    //             //get user data from db
    //             const { data } = await axios.get(`/api/feel?email=${session.user.email}`);
    //             console.log(data);
    //         }
    //     }
    //     getAccessToken();
    // }, [session]);

    return (
        <AccountLayout title="Seguimiento">
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-3xl font-bold text-gray-900">Seguimiento</h1>
                <p className="text-gray-500">En construcción</p>
            </div>
        </AccountLayout>
    );
};

export default TrackPage;