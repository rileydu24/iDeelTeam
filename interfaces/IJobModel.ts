import Mongoose = require("mongoose");

interface IJobModel extends Mongoose.Document {
    jobID: number;
    businessID: number;
    title: string;
    description: string;
    companyName: string;
    city: string;
    phoneNo: string;
    salary: string;
    startDate: string;
    endDate: string;
    availability: boolean;
}

export default IJobModel;