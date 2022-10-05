import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/routes.js';
import path from 'path';

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://127.0.0.1/newlinks');

const db = mongoose.connection;

//console.log(db);

db.on("error", () => console.log("houve um erro"));
db.once("open", () => console.log("Banco carregado"));


app.use('/', router);

app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));