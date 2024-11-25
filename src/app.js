import  express from 'express'
import  productRoutes from './routes/products.routes.js'
import  userRoutes from './routes/users.routes.js'
import  cors from 'cors'

const app=express();

app.use(cors());
app.use(express.json());// antes de el route para que funcione

app.use('/products', productRoutes);
app.use('/users',userRoutes);


export default app