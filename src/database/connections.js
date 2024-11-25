import sql from 'mssql'


const dbSettings = {
    user: "Administrador",
    password: "123456",
    server: "localhost",
    database: "WebStore",
    options:{
        encrypt:false,
        trustServerCertificate:true,
    }

}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
       //const result= await pool.request().query("SELECT GETDATE()");
        //console.log(result);
        return pool;
    } catch (error) {
        console.error(error);
    }
};
