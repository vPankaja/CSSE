import  mongoose  from 'mongoose';

const fullJourneySchema = mongoose.Schema(
    {
        timetableId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const FullJourney = mongoose.model("FullJourneys", fullJourneySchema);

export default FullJourney;