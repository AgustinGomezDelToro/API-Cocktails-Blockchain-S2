import mongoose from 'mongoose';

const BarSchema = new mongoose.Schema({
    location: {
        lat: Number,
        lon: Number
    },
    adresse: String,
    cocktails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cocktail' }],
    distance: Number
});

export default mongoose.model('Bar', BarSchema);
