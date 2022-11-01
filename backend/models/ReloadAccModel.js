import  mongoose  from 'mongoose';

const ReloadAccSchema = mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        accno: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        phoneno: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const ReloadAcc = mongoose.model("Timetable", ReloadAccSchema);

export default ReloadAcc;