## DATABASE DESIGN
    - User Table
    - Factory table
    - Booking Table
    - Transaction Table

    - one user can have many bookings and transactions (many-to-one relationship b/w booking and user)
    - many bookings have many factories  (many-to-many relationship)
    -  many bookings can be associated with one user (many-to-one relationship b/w bookings and user)
    - Each transaction is associated with one user, so there will be a (many-to-one relationship between Transactions and Users.) 

## TABLE DESIGN
    - User -> id , username, email, password, points, created_At, updated_At
    - Booking -> id, userId (foreign key), factoryId (foreign Key), status
    - Factory -> id, name, location, contact_details, availability
    - Transaction -> id, userId, points_earned, points_redeemed

    -