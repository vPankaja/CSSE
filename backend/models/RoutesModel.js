import  mongoose  from 'mongoose';

const RoutesSchema = mongoose.Schema(
    {
        routeId: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        },
        trafficType: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const Routes = mongoose.model("Routes", RoutesSchema);

export default Routes;