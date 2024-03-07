module.exports = {
    multipleMongooseToObject: function (mongoses) {
        return mongoses.map((mongose) => mongose.toObject())
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}