import express from 'express';
import bodyParser from 'body-parser';

import categoriasRouters from './routes/categoriasRoutes.js';
import productosRoutes from './routes/productosRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))

app.use('/categorias' , categoriasRouters); 
app.use('/productos', productosRoutes)

app.listen(3000 , () => {
    //lo esta recibiendo desde git    
}); 
