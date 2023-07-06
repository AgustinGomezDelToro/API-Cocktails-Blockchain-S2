import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as cocktailController from './controllers/cocktailController';
import * as barController from './controllers/barController';



const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//mongoose.connect('mongodb+srv://username:password@api-node.4a7tavs.mongodb.net/cocktail-api?retryWrites=true&w=majority', mongooseOptions);

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes pour les cocktails
app.get('/cocktails', cocktailController.getAllCocktails);
app.get('/cocktails/:id', cocktailController.getCocktail);
app.post('/cocktails', cocktailController.createCocktail);
app.patch('/cocktails/:id', cocktailController.updateCocktail);
app.delete('/cocktails/:id', cocktailController.deleteCocktail);

// Routes pour les bars
app.get('/bars', barController.getAllBars);
app.get('/bars/:id', barController.getBar);
app.post('/bars', barController.createBar);
app.patch('/bars/:id', barController.updateBar);
app.delete('/bars/:id', barController.deleteBar);


// Cocktial espesifique
app.get('/bars/cocktail/:cocktailId', barController.getBarsByCocktail);

// chercher le bar plus pres
app.get('/bars/nearby', barController.getNearestBar);


//distance
app.get('/bars/nearby', barController.getNearestBar);

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
