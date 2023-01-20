const router = require('express').Router();
const sequelize = require('../config/connect');
const { comment, login } = require('../models');

router.get('/', (req, res) => {
    res.render('home');
}, (req, res) => {
    res.render('home');
});

router.post('/comment', (req, res) => {
    comment.create({
        user_id: req.body.user_id,
        comment: req.body.comment
    })
    .then(() => {
        res.redirect('/home');
    })
    .catch(err => console.log(err));
}, (req, res) => {
    res.redirect('/home');
});


router.post('/login', (req, res) => {
    login.findOne({
        where: {
            username: req.body.username
        }
    }), (req, res) => {
        res.redirect('/home');
    };
})
    .then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    res.redirect('/home');
                } else {
                    res.redirect('/home');
                }
            });
        } else {
            res.redirect('/home');
        }
    })
    .catch(err => console.log(err));

module.exports = router;