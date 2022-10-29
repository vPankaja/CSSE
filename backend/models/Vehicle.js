import  mongoose  from 'mongoose';

const VehicleSchema = mongoose.Schema(
    {
        driverName: {
            type: String,
            required: true,
        },
        vehicleType: {
            type: String,
            required: true,
        },
        cost: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const Vehicles = mongoose.model("Vehciles", VehicleSchema);

export default Vehicles;