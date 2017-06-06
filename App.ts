import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as nodemailer from 'nodemailer';

import DataAccess from './DataAccess';
import JobModel from './model/JobModel';
import UserWorkerModel from './model/UserWorkerModel';
import UserBusinessModel from './model/UserBusinessModel';

import sendMail from './Controllers/sendMail';

// Creates and configures an ExpressJS web server.

class App {
    // ref to Express instance
    public express: express.Application;

    public Job: JobModel;
    public UserWorker: UserWorkerModel;
    public UserBusiness: UserBusinessModel;
    public mail: sendMail;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();

        this.Job = new JobModel();
        this.UserWorker = new UserWorkerModel();
        this.UserBusiness = new UserBusinessModel();
        this.mail = new sendMail();

    }
    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();

        const options: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };

        router.use(cors(options));
        router.options("*", cors(options));

        router.get('/api/users/bUsers', (req, res) => {
            this.UserBusiness.retreiveAll(res);
        });

        router.get('/api/users/wUsers', (req, res) => {
            this.UserWorker.retreiveAll(res);
        });

        router.get('/api/users/bUsers/:id', (req, res) => {
            let id = req.params.id;
            this.UserBusiness.retreiveOne(res, {businessID: id});
        })

        router.get('/api/users/wUsers/:id', (req, res) => {
            let id = req.params.id;
            this.UserWorker.retreiveOne(res, {workerID: id});
        });

        router.post('/api/users/register', (req, res) => {
            let userInfo = req.body;
            if("businessID" in userInfo){
                this.UserBusiness.model.create([userInfo], (err) => {
                    if(err) {
                        console.log('business create fail');
                    }
                })
            } else {
                this.UserWorker.model.create([userInfo], (err)=> {
                    if(err){
                        console.log('worker create fail');
                    }
                })
            }
            res.end();
        });

        router.get('/api/jobs', (req, res) => {
            this.Job.retreiveAll(res);
        });

        router.get('/api/jobs/:id', (req, res) => {
            var id = req.params.id;
            this.Job.retreiveJob(res, { 'jobID': id });
        });

        router.post('/api/jobs', (req, res) => {
            var newJob = req.body;
            this.Job.model.create([newJob], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            })
            res.end();
        });

        //Update on job given jobID as argument
        router.put("/api/jobs/:id", (req, res) => {
            var id = req.params.id;
            this.Job.updateJob(req, res, id);
        });

        //Set jobID to appliedlist array of wUser 
        router.put("/api/jobs/:jobID/:wUser", (req, res) => {
            let wUser = req.params.wUser;
            let jobID = req.params.jobID;
            this.Job.addAppliedList(req,res,jobID, wUser);
        });

        //Set wUserID to appliedlist array of job
        router.put("/api/users/:wUser/:jobID", (req, res) => {
            let wUser = req.params.wUser;
            let jobID = req.params.jobID;
            this.UserWorker.addAppliedList(req, res, jobID, wUser);
        });

        //Set jobID to wUser's savedList
        router.put("/api/save/:wUser/:jobID", (req, res)=>{
            let wUser = req.params.wUser;
            let jobID = req.params.jobID;
            this.UserWorker.addSavedList(req, res, jobID, wUser);
        });
        //Delete one job given jobID as argument
        router.delete("/api/jobs/:id", (req, res) => {
            var id = req.params.id;

            this.Job.deleteJob(res, id);
        });

        router.post('/api/sendWorker', (req, res) => {
            this.mail.sendEmailWorker(req.body);
            res.end();
        });

        router.post('/api/sendBusiness', (req, res) => {
            this.mail.sendEmailBusiness(req.body);
            res.end();
        });

        this.express.use('/', router);
        this.express.use('/', express.static(__dirname + '/dist'));

    }
}
export default new App().express;