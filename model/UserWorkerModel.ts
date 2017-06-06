import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserWorkerModel from '../interfaces/IUserWorkerModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class UserWorkerModel {
    public schema: Mongoose.Schema;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = mongoose.Schema(
            {
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
                //picturePhoto: {data:Buffer, contentType:String}
            }, { collection: 'userWorker' }

        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserWorkerModel>("userWorker", this.schema);
    }

    //Do some function response here with json here
    public retreiveAll(response: any): any {
        var query = this.model.find({});
        query.exec((err, workerArray) => {
            response.json(workerArray);
        });
    }

    public addAppliedList(req: any, res: any, jobID: Object, wUserID: Object): any {
        let query = this.model.findOne({ "workerID": wUserID });
        query.exec((err, wUser) => {
            if(wUser.appliedList.indexOf(jobID)==-1){
                wUser.appliedList.push(jobID);
            wUser.save((err, result) => {
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
    public addSavedList(req: any, res: any, jobID: Object, wUserID: Object): any {
        let query = this.model.findOne({ "workerID": wUserID });
        query.exec((err, wUser) => {
            if(wUser.savedList.indexOf(jobID)==-1){
                wUser.savedList.push(jobID);
                wUser.save((err, result) => {
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
    public retreiveOne(res: any, filter: Object) {
        let query = this.model.findOne(filter);        
        query.exec((err, oneWorkerUser) => {
            res.json(oneWorkerUser);
        });

    }
}
