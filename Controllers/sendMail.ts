'use strict';
import * as nodemailer from 'nodemailer';

export default class sendMail {

    private smtpTransport;

    public constructor() {
        this.smtpTransport = nodemailer.createTransport({
            service: "gmail",
            host: "ideel.bot@gmail.com",
            auth: {
                user: "ideel.bot@gmail.com",
                pass: "yolonahnahjk"
            }
        });    
    }

    public sendEmailWorker(workerObj:any):void{
            console.log(workerObj.email);

        var mailOptions= {
            to: workerObj.workerEmail, // list of receivers
            subject: 'Job Application Confirmation', // Subject line
            text: 'Thank you for applying! You will hear back from the business soon!', // plain text body
        }

        this.smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
                console.log('error');
            } else{
                console.log('sent');
            }            
        });
    }

    public sendEmailBusiness(businessObj:any):void{
    
        var mailOptions= {
            to: businessObj.businessEmail, // list of receivers
            subject: 'Job Applicant Confirmation', // Subject line
            text: 'You have a job seeker that is looking to apply for this job. \n Email: ' + businessObj.workerEmail, // plain text body
        }

        this.smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
                console.log('error');
            } else{
                console.log('sent');
            }            
        });        
    }
    
}