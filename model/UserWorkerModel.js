"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class UserWorkerModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            workerID: Number,
            firstName: String,
            lastName: String,
            dob: String,
            email: String,
            city: String,
            address: String,
            zipcode: String,
            jobTags: String,
            description: String,
            username: String,
            password: String,
            pictureID: Number,
            resume: String,
            savedList: Array,
            appliedList: Array,
            subscribed: Array,
        }, { collection: 'userWorker' });
    }
    createModel() {
        this.model = mongooseConnection.model("userWorker", this.schema);
    }
    //Do some function response here with json here
    retreiveAll(response) {
        var query = this.model.find({});
        query.exec((err, workerArray) => {
            response.json(workerArray);
        });
    }
    addAppliedList(req, res, jobID, wUserID) {
        let query = this.model.findOne({ "workerID": wUserID });
        query.exec((err, wUser) => {
            if (wUser.appliedList.indexOf(jobID) == -1) {
                wUser.appliedList.push(jobID);
                wUser.save((err, result) => {
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
    addSavedList(req, res, jobID, wUserID) {
        let query = this.model.findOne({ "workerID": wUserID });
        query.exec((err, wUser) => {
            if (wUser.savedList.indexOf(jobID) == -1) {
                wUser.savedList.push(jobID);
                wUser.save((err, result) => {
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
    retreiveOne(res, filter) {
        let query = this.model.findOne(filter);
        query.exec((err, oneWorkerUser) => {
            res.json(oneWorkerUser);
        });
    }
}
exports.default = UserWorkerModel;
