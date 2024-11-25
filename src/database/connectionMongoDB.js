import { MongoClient } from 'mongodb'


// Función que obtiene el cliente MongoDB
export const clientMongo = async () => {
    const uri = "mongodb+srv://jmmontiel:A0NjKhfft9pHnTIi@webstore.omnfu.mongodb.net/?retryWrites=true&w=majority&appName=WebStore&connectTimeoutMS=10000&socketTimeoutMS=45000";
    const client = new MongoClient(uri);  // Sin las opciones deprecated

    try {
        // Conectar al cliente y devolver la conexión
        const pool = await client.connect();
        return pool;
    } catch (error) {
        client.close();
        console.error("Error al conectar a MongoDB", error);
    }
};