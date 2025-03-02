const BookingRepository =require('../repository/booking-repository');

class BookingService{
    constructor(){
        this.bookingRepository =new BookingRepository();
    }

    async create(data){
        try{
            const booking = await this.bookingRepository.create(data);
            return booking;
        } catch(error){
            console.log("Something Went wrong in service layer.");
            throw error;
        }
    }

};

module.exports =BookingService;