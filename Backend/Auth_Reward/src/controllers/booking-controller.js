const BookingService = require('../services/booking-service');
const bookingService = new BookingService();

const create = async (req,res) =>{
    try{
        const response = await bookingService.create({
            userId : req.body.userId,
            factoryId: req.body.factoryId,
            status: req.body.status,
            wasteName: req.body.wasteName,
            location: req.body.location,
            phoneNo : req.body.phoneNo,
            modelName: req.body.modelName
        });
        console.log("===========================================================================");
        return res.status(201).json({
            message: 'Successfully created the Booking',
            err: {},
            data: response,
            success: true
        })   
    } catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}

module.exports = {
    create
}