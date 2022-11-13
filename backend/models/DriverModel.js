import  mongoose  from 'mongoose';

const DriverSchema = mongoose.Schema(
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
        busNo: {
            type: String,
            required: true
        },
        routeNo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const Drivers = mongoose.model("Drivers", DriverSchema);

export default Drivers;