const { where } = require('sequelize');
const {Booking}  = require('../models/index');

class BookingRepository{
    async create(data){
        try{
            const booking = await Booking.create(data);
            return booking;
        } catch(error){
            console.log("Error at booking Repository.")
            throw error;
        }
    }

    async delete(bookingId){
        try{
            const booking = await Booking.delete({
                where: {
                    id: bookingId
                }
            })
        }
        catch(error){
            console.log("Error at booking Repository.")
            throw error;
        }
    }
};

module.exports =BookingRepository;