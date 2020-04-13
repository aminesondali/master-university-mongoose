const mongoose = require('mongoose')

const masterSchema = mongoose.Schema({

    masterName : {
        type:String,
        required: true,
        uppercase: true,
        trim: true,
    },
    coordinateur: {
            type: String,
            required: true,
    },

    departement : {
            type:String,
            required:true,
    },

    chefDept: {
        type: String,
        required:true,
    },
    nbrProfesseurs: {
        type:Number
    },
    nbrEtudiants: {
        type:Number
    },
    nbrModules:{
        type: Number
    }

})

module.exports = mongoose.model('Master', masterSchema);