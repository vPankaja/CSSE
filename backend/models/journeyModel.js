import  mongoose  from 'mongoose';

const journeySchema = mongoose.Schema(
    {
        timetableId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Journey = mongoose.model("Journey", journeySchema);

export default Journey;