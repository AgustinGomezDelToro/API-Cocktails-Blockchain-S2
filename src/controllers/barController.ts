import { Request, Response } from 'express';
import Bar from '../models/bar';
import { calculateDistance } from '../utils';

export const getAllBars = async (req: Request, res: Response) => {
    try {
        const bars = await Bar.find({});
        res.send(bars);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getBar = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const bar = await Bar.findById(id);

        if (!bar) {
            return res.status(404).send();
        }

        res.send(bar);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createBar = async (req: Request, res: Response) => {
    const bar = new Bar(req.body);

    try {
        await bar.save();
        res.status(201).send(bar);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateBar = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const bar = await Bar.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!bar) {
            return res.status(404).send();
        }

        res.send(bar);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteBar = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const bar = await Bar.findByIdAndDelete(id);

        if (!bar) {
            return res.status(404).send();
        }

        res.send(bar);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getBarsByCocktail = async (req: Request, res: Response) => {
    const { cocktailId } = req.params;

    try {
        const bars = await Bar.find({ cocktails: cocktailId });
        res.send(bars);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getNearestBar = async (req: Request, res: Response) => {
    const { userLat, userLon } = req.query;

    try {
        const bars = await Bar.find({});

        const barsWithDistance: any[] = bars.map((bar: any) => {
            const distance = calculateDistance(Number(userLat), Number(userLon), bar.location.lat, bar.location.lon);
            return { ...bar.toObject(), distance };
        });

        barsWithDistance.sort((a, b) => a.distance - b.distance);

        const nearestBar = barsWithDistance[0];

        res.send(nearestBar);
    } catch (error) {
        res.status(500).send(error);
    }
};
