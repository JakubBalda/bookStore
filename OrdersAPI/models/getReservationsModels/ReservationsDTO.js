const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ReservationDTO'
        }
    ]
})

module.exports = mongoose.model('ReservationsDTO', ReservationsSchema);