import express from 'express';
import  frutasRouter  from './routes/frutas.routes';

const app = express();

app.use(express.json());
app.use(frutasRouter)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})