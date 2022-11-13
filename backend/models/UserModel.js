import  mongoose  from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        balance: {
            type: Number,
            required: false,
            default: 0
        },
        busNo: {
            type: String,
            required: false,
            default: ""
        },
        routeNo: {
            type: String,
            required: false,
            default: ""
        }
    },
    {
        timestamps: true,
    }
)

const Users = mongoose.model("Users", UserSchema);

export default Users;