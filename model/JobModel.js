"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class JobModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            jobID: Number,
            businessID: Number,
            title: String,
            description: String,
            companyName: String,
            city: String,
            zipcode: String,
            phoneNo: String,
            salary: String,
            startDate: String,
            endDate: String,
            availability: Boolean,
            address: String,
            watchingList: Array,
            appliedList: Array,
            numOfViews: String,
            jobTags: Array,
        }, { collection: 'jobs' });
    }
    createModel() {
        this.model = mongooseConnection.model("jobs", this.schema);
    }
    //Do some function response here with json here
    retreiveAll(response) {
        var query = this.model.find({});
        query.exec((err, listOfJobs) => {
            response.json(listOfJobs);
        });
    }
    retreiveJob(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, data) => {
            response.json(data);
        });
    }
    updateJob(req, res, id) {
        this.model.findOne({ jobID: id }, (err, job) => {
            console.log(req);
            job.title = req.body.title || job.title;
            job.description = req.body.description || job.description;
            job.companyName = req.body.description || job.companyName;
            job.city = req.body.city || job.city;
            job.zipcode = req.body.zipcode || job.zipcode;
            job.phoneNo = req.body.phoneNo || job.phoneNo;
            job.salary = req.body.salary || job.salary;
            job.startDate = req.body.startDate || job.startDate;
            job.endDate = req.body.endDate || job.endDate;
            job.address = req.body.address || job.address;
            job.save((err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.send(result);
            });
        });
    }
    addAppliedList(req, res, jobID, wUser) {
        console.log(this.model.appliedList);
        let query = this.model.findOne({ "jobID": jobID });
        query.exec((err, job) => {
            if (job.appliedList.indexOf(wUser) == -1) {
                job.appliedList.push(wUser);
                job.save((err, result) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.send(result);
                });
            }
            else {
                res.send("exist");
            }
        });
    }
    deleteJob(response, id) {
        var query = this.model.deleteOne({ "jobID": id });
        query.exec((err, data) => {
            response.json(data);
        });
    }
}
exports.default = JobModel;
