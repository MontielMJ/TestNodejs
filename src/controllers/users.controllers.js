import { clientMongo } from '../database/connectionMongoDB.js'
import { ObjectId, UUID } from 'mongodb';

// Controlador para obtener usuarios
export const getUsers = async (req, res) => {
    try {
        // Obtener el cliente Mongo desde la función
        const client = await clientMongo();
        // Verificar si la conexión fue exitosa
        if (client) {
            //console.log("Conexión exitosa:", client);
            // Aquí puedes interactuar con la base de datos
            const db = client.db('Store_DB');  // Ejemplo: accediendo a la base de datos Store_DB
            const users = await db.collection('Users').find().toArray();  // Obtener los usuarios (ajusta según tu esquema)
            client.close();
            // Enviar la lista de usuarios como respuesta
            res.json(users);
        } else {
            res.status(500).json({ message: "No se pudo conectar a MongoDB" });
        }
    } catch (error) {
        console.error("Error al obtener los usuarios", error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};

export const getUserById = async(req, res)=> {
    try {
        const client = await clientMongo();
        if (client) {
            const db = client.db('Store_DB');  // Ejemplo: accediendo a la base de datos Store_DB
            const userId = ObjectId.isValid(req.params.id) ? new ObjectId(req.params.id) : req.params.id;
            const query = { "_id": userId };  
            const users = await db.collection('Users').findOne(query);  // Obtener los usuarios (ajusta según tu esquema)
            client.close();
            res.json(users);
        } else {
            res.status(500).json({ message: "No se pudo conectar a MongoDB" });
        }
    } catch (error) {
        client.close();
        console.error("Error al obtener los usuarios", error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};

export const insertUser = async(req, res)=> {
    try {
        const client = await clientMongo();
        if (client) {
            const db = client.db('Store_DB');  // Ejemplo: accediendo a la base de datos Store_DB
            console.log(req.body)
           const docUser={
            "_id": new ObjectId(),
            "name": req.body.name,
            "aPaterno": req.body.aPaterno,
            "aMaterno": req.body.amaterno,
            "birthDay": req.body.birthDay
        };

            const result = await db.collection('Users').insertOne(docUser);  // Obtener los usuarios (ajusta según tu esquema)
            client.close();
            res.json(`A document was inserted with the _id: ${result.insertedId}`);
        } else {
            res.status(500).json({ message: "No se pudo conectar a MongoDB" });
        }
    } catch (error) {
        console.error("Error al insertar usuario", error);
        res.status(500).json({ message: "Error al insertar usuario" });
    }
};

export const updateUser = async(req, res)=> {
    try {
        const client = await clientMongo();
        if (client) {
            const db = client.db('Store_DB');
            const filter = {_id: new ObjectId(req.body._id)};
            const options = {upsert:true};
              
           const docUser={
                $set:{
                    "name": req.body.name,
                    "aPaterno": req.body.aPaterno,
                    "amaterno": req.body.amaterno,
                    "birthDay": req.body.birthDay
                }   
            };
            const result = await db.collection('Users').updateOne(filter, docUser, options);
            client.close();
            res.json(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
            
            console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
        } else {
            res.status(500).json({ message: "No se pudo conectar a MongoDB" });
        }
    } catch (error) {
        console.error("Error al actualizar usuario", error);
        res.status(500).json({ message: "Error al actualizar usuario" });
    }
};

export const deleteUser =  async(req, res)=>{
try {
    const client = await clientMongo();
    if (client) {
        const db = client.db('Store_DB');
        const query = {_id: new ObjectId(req.params.id)};
        const result = await db.collection('Users').deleteOne(query);
        client.close();
        res.json(`A document was eliminado with the _id: ${req.params.id}`);
    } else {
        res.status(500).json({ message: "No se pudo conectar a MongoDB" });
    }
} catch (error) {
    console.error("Error al eliminar el usuario", error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
}

};