import  mongoose  from 'mongoose';
import Routes from './RoutesModel.js';
import Vehicles from './Vehicle.js';

const timeTableSchema = mongoose.Schema(
    {
        route: {
            type: Routes.schema,
            required: true,
        },
        vehicle: {
            type: Vehicles.schema,
            required: true,
        },
        driver: {
            type: String,
            required: true
        },
        inspector: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const TimeTable = mongoose.model("Timetable", timeTableSchema);

export default TimeTable;