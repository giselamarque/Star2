const router = require('express').Router();
const sequelize = require('../config/connect');
const { comment, login } = require('../models');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.render('dash');
}, (req, res) => {
    res.render('dash');
});

router.post('/comment', (req, res) => {
    comment.create({
        user_id: req.body.user_id,
        comment: req.body.comment
    })
    .then(() => {
        res.redirect('/dash');
    })
    .catch(err => console.log(err));
}, (req, res) => {
    res.redirect('/dash');
});

router.post('/login', (req, res) => {
    login.findOne({
        where: {
            username: req.body.username
        }
    }), (req, res) => {
        res.redirect('/dash');
    };  
})

    .then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    res.redirect('/dash');
                } else {
                    res.redirect('/dash');
                }
            });
        } else {
            res.redirect('/dash');
        }
    })
    .catch(err => console.log(err));


module.exports = router;


