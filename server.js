const path = require('path');
const router = require('express').Router();
const login = require('../models/login');
const comment = require('../models/comment');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connect');

const PORT = process.env.PORT || 3001;

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        secure: false,
        httpOnly: true
    },
    store: new SequelizeStore({
        db: sequelize
    })
};

router.use(session(sess));
