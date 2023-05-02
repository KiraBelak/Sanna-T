import {MongoClient} from 'mongodb';


export default async function handler(req, res) {
    const { method, body, query } = req;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const feel = db.collection("feel");

    switch (method) {
        case "POST":
            console.log("ESTA AQUI");
            //ejemplo de body:
            // {
            //     '4/30/2023': {
            //       usuario: 'kiraomgamer@gmail.com',
            //       sentir: { name: 'Estresado', emoji: '😫' },
            //       porque: 'qeqweqw',
            //       actividades: [ [Object] ],
            //       rating: '6',
            //       emocion: { name: 'Angustia', emoji: '😰' },
            //       learning: 'qweqweqw'
            //     }
            //   }
            const bodyArray = Object.keys(body).map((key) => {
                return {
                    date: key,
                    ...body[key]
                }
            });
            //ejemplo de bodyArray:
            // [
            //     {
            //       date: '4/30/2023',
            //       usuario: 'kiraomgamer@gmail.com',
            //       sentir: { name: 'Estresado', emoji: '😫' },
            //       porque: 'qeqweqw',
            //       actividades: [ [Object] ],
            //       rating: '6',
            //       emocion: { name: 'Angustia', emoji: '😰' },
            //       learning: 'qweqweqw'
            //     }
            //     ]

            //  console.log(bodyArray);
            //buscar si existeel usuario
            const user = await feel.findOne({usuario: bodyArray[0].usuario});
            //si no existe, crearlo
            if(!user){
                const answer = await feel.insertOne({usuario: bodyArray[0].usuario});
                // console.log(answer);
            }

            //buscar si ya existe un registro con esa fecha en el usuario
            // const existing = await feel.findOne({ date: bodyArray[0].date});
            //buscar si ya existe un registro con esa fecha en el usuario.feel
            const existing = await feel.findOne({usuario: bodyArray[0].usuario, feels: {$elemMatch: {date: bodyArray[0].date}}});

            //si no existe, crearlo
            if(!existing){
                //insertar el registro en el usuario con la fecha
                const answer = await feel.updateOne({usuario: bodyArray[0].usuario}, {$push: {feels: bodyArray[0]}});

                console.log(answer);
                res.status(200).json({message: "Se ha creado el registro"});
            }else{
                res.status(400).json({message: "Ya existe un registro con esa fecha"});
            }
            break;
        case "GET":
            //  console.log(query);
             const existeUser = await feel.findOne({usuario: query.email});
            // console.log(existeUser);
            if(existeUser){
                res.status(200).json({message: "Se ha encontrado el usuario", data: existeUser});
            }else{
                res.status(400).json({message:"El usuario no tiene registros"});
            }
            break;
        default:
            res.status(400).json({message: "Metodo no soportado"});
            break;

    }
                                

}