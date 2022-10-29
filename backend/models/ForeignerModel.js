import  mongoose  from 'mongoose';

const ForeignerSchema = mongoose.Schema(
    {
        name: {
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
        }
    },
    {
        timestamps: true,
    }
)

const Foreigners = mongoose.model("Foreigners", ForeignerSchema);

export default Foreigners;