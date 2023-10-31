import {User, Property as property} from '../sequelize.js';
import passport from 'passport';
export default (app) => {
    app.post('/postyourproperty', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.error(err);
        }
        if (info !== undefined) {
            console.error(info.message);
            res.status(403).send(info.message);
        } else {
            User.findOne({
            where: {
                username: user.username,
            },
            }).then((userInfo) => {
            if (userInfo != null) {
                console.log('user found in db');
                console.log("this2");
                property.create({
                    userid:userInfo.id,
                    apartment:req.body.apartment,
                    apartmentname:req.body.apartmentname,
                    bhk:req.body.bhk,
                    floor:req.body.floor,
                    totalfloor:req.body.totalfloor,
                    propertyage:req.body.propertyage,
                    expectedrent:req.body.expectedrent,
                    expectedDepost:req.body.expectedDepost,
                    date:req.body.date
                })
                .then(() => {
                    console.log('property added');
                    res.status(200).send({ auth: true, message: 'property added' });
                });
            } else {
                console.error('no user exists in db to update');
                res.status(401).send('no user exists in db to update');
            }
            });
        }
        })(req, res, next);
    });
};
