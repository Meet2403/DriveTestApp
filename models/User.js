const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    firstname: {
        type: String,
        default: ""
    },
    lastname: {
        type: String,
        default: ""
    },
    licensenumber: {
        type: String,
        default: ""
    },
    age: {
        type: String,
        default: ""
    },
    dob: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    appointment_id: {
        type: String,
        default: ""
    },
    test_type: {
        type: String,
        default: ""
    },
    comment_G2: {
        type: String,
        default: ""
    },
    comment_G: {
        type: String,
        default: ""
    },
    result_G2: {
        type: String,
        default: ""
    },
    result_G: {
        type: String,
        default: ""
    },
    car_details: {
        make: {
            type: String,
            default: ""
        },
        model: {
            type: String,
            default: ""
        },
        year: {
            type: String,
            default: ""
        },
        platno: {
            type: String,
            default: ""
        }
    }
});

UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
