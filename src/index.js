import app from "./app.js";
import { getConnection } from "./database/connections.js";


//getConnection();
app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor escuchando en el puerto 3000');
});

app.get('/', (req, res) => {
  res.send('Servidor Express OK');
});
