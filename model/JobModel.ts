import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IJobModelModel from '../interfaces/IJobModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class JobModel {
    public schema: Mongoose.Schema;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = mongoose.Schema(
            {
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
                // workerID: Number,

            }, { collection: 'jobs' }
        );
    } 

    public createModel(): void {
        this.model = mongooseConnection.model<IJobModelModel>("jobs", this.schema);
    }

    //Do some function response here with json here

    public retreiveAll(response: any): any {
        var query = this.model.find({});
        query.exec((err, listOfJobs) => {
            response.json(listOfJobs);
        });
    }

    public retreiveJob(response: any, filter: Object): any {
        var query = this.model.findOne(filter);
        query.exec((err, data) => {
            response.json(data);
        });
    }

    public updateJob(req: any, res: any, id: number): any {
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
                    res.status(500).send(err)
                }
                res.send(result);
            });

        });
    }

    public addAppliedList(req: any, res: any, jobID: string, wUser: string): any {
        console.log(this.model.appliedList);
        let query = this.model.findOne({ "jobID": jobID });
        query.exec((err, job) => {
            if (job.appliedList.indexOf(wUser) == -1) {
                job.appliedList.push(wUser);
                job.save((err, result) => {
                    if (err) {

                        res.status(500).send(err)
                    }
                    res.send(result);
                });
            }else{
                res.send("exist");
            }

        })

    }

    public deleteJob(response: any, id: Object): any {
        var query = this.model.deleteOne({ "jobID": id });
        query.exec((err, data) => {
            response.json(data);
        });
    }
}