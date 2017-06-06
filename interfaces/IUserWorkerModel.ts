import Mongoose = require("mongoose");

interface IUserWorkerModel extends Mongoose.Document {
    workerID: string;
    firstName: string;
    lastName: string;
    dob: string;
    email: string;
    address: string;
    zipcode: number;
    jobTags: string;
    description: string;
    username: string;
    password: string;
    pictureID: number;
    //picturePhoto: {data:Buffer, contentType:String};
}

export default IUserWorkerModel;