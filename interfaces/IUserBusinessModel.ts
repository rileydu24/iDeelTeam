import Mongoose = require("mongoose");

interface IUserBusinessModel extends Mongoose.Document {
    businessID: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    zipcode: number;
    jobTags: string;
    companyName: string;
    description: string;
    companyLicenseNo: string;
    username: string;
    password: string;
    pictureID: number;
    //picturePhoto: {data:Buffer, contentType:String};
}

export default IUserBusinessModel;