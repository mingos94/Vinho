
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
    name: {
        type: String,
        required: ' Introduza o seu nome '
    },
    year: {
        type: String,
        required: ' Introduza o ano do Vinho '
    },
    grapes: {
        type: String,
        required: ' Introduza a casta do Vinho '
    },

    country: {
        type: String,
        required: ' Introduza o país de origem '
    },
    region: {
        type: String,
        required: ' Introduza a região do Vinho '
    },
    description: {
        type: String,
        required: ' Introduza uma breve descrição '
    },
    picture: {
        type: String,
        required: ' Introduza o url da garrafa '
    },
    items: [{
            quantity: {
                type: Number,
                required: ' Introduza a quantidade de garrafas '
            },
            price: {
                type: Number,
                required: ' Introduza o preço de venda '
            },
        }]
});

module.exports = mongoose.model('vinho', WineSchema);   