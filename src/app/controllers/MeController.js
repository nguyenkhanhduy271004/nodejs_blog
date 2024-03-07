const Course = require('../Models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // [GET] /me/stored/courses
    storedCoureses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

    // [RESTORE] /me/trash/courses 
    restoreCoureses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

}

module.exports = new MeController();
