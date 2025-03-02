const express = require('express');
const { PORT } = require('./config/serverConfig');
const db = require('./models/index');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const startServer = () => {
    // Define CORS options
    const corsOptions = {
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Allow cookies and other credentials to be sent with the request
        preflightContinue: true,
        optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204,,

    };

    // Enable CORS with options
    app.use(cors(corsOptions));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on Port ${PORT}`);

        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
    });
};

startServer();
