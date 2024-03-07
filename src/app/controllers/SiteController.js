const Course = require('../Models/Course'); // Adjust the path as per your project structure
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
        // res.render('home');
    }

    // [GET] /news/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
