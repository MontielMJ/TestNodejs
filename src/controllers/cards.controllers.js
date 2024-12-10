import { clientMongo } from '../database/connectionMongoDB.js'
import { ObjectId, UUID } from 'mongodb';


export const insertCard = async(req, res)=> {
    try {
        const client = await clientMongo();
        if (client) {
            const db = client.db('Store_DB');  // Ejemplo: accediendo a la base de datos Store_DB
            console.log(req.body)
           const docUser={
            "_id": new ObjectId(),
            "titular": req.body.titular,
            "numeroTarjeta": req.body.numeroTarjeta,
            "fechaExpiracion": req.body.fechaExpiracion,
            "cvv": req.body.cvv
        };

            const result = await db.collection('Cards').insertOne(docUser);  // Obtener los usuarios (ajusta según tu esquema)
            client.close();
            res.json(`A card was inserted with the _id: ${result.insertedId}`);
        } else {
            res.status(500).json({ message: "No se pudo conectar a MongoDB" });
        }
    } catch (error) {
        console.error("Error al insertar la tarjeta", error);
        res.status(500).json({ message: "Error al insertar la cartera" });
    }
};
export const getCards = async (req, res) => {
    try {
        // Obtener el cliente Mongo desde la función
        const client = await clientMongo();
        // Verificar si la conexión fue exitosa
        if (client) {
            // Aquí puedes interactuar con la base de datos
            const db = client.db('Store_DB');  // Ejemplo: accediendo a la base de datos Store_DB
            const users = await db.collection('Cards').find().toArray();  // Obtener las tarjetas (ajusta según tu esquema)
            client.close();
            // Enviar la lista de usuarios como respuesta
            res.json(users);
        } else {
            res.status(500).json({ message: "No se pudo conectar a MongoDB" });
        }
    } catch (error) {
        console.error("Error al obtener las tarejetas", error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};