const mongoose = require('mongoose')
const Schema = mongoose.Schema


const activiteSchema = new Schema({
    activity: {
        type: String,
        required: true
    },
    accessibility: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    participants: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    // utilisateurId:{
    //     type:Schema.Types.ObjectId,
    //     ref: 'Utilisateur',
    //     required: true
    // }

})


module.exports = mongoose.model("Activite", activiteSchema)