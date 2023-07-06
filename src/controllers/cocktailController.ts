import { Request, Response } from 'express';
import Cocktail from '../models/cocktail';

export const getAllCocktails = async (req: Request, res: Response) => {
    try {
        const cocktails = await Cocktail.find();
        res.json(cocktails);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getCocktail = async (req: Request, res: Response) => {
    const _id = req.params.id;

    try {
        const cocktail = await Cocktail.findById(_id);

        if (!cocktail) {
            return res.status(404).send();
        }

        res.send(cocktail);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createCocktail = async (req: Request, res: Response) => {
    const cocktail = new Cocktail(req.body);

    try {
        await cocktail.save();
        res.status(201).send(cocktail);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateCocktail = async (req: Request, res: Response) => {
    const _id = req.params.id;

    try {
        const cocktail = await Cocktail.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

        if (!cocktail) {
            return res.status(404).send();
        }

        res.send(cocktail);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteCocktail = async (req: Request, res: Response) => {
    const _id = req.params.id;

    try {
        const cocktail = await Cocktail.findByIdAndDelete(_id);

        if (!cocktail) {
            return res.status(404).send();
        }

        res.send(cocktail);
    } catch (error) {
        res.status(500).send(error);
    }
};
