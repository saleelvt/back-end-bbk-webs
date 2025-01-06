const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
          },
          role: {
            type: String,
            enum: ["user", "admin", "salon"],
            default: "admin",
          },
},
{
    timestamps : true
}
)

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;