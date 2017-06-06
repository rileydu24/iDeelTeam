'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
class sendMail {
    constructor() {
        this.smtpTransport = nodemailer.createTransport({
            service: "gmail",
            host: "ideel.bot@gmail.com",
            auth: {
                user: "ideel.bot@gmail.com",
                pass: "yolonahnahjk"
            }
        });
    }
    sendEmailWorker(workerObj) {
        console.log(workerObj.email);
        var mailOptions = {
            to: workerObj.workerEmail,
            subject: 'Job Application Confirmation',
            text: 'Thank you for applying! You will hear back from the business soon!',
        };
        this.smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                console.log('error');
            }
            else {
                console.log('sent');
            }
        });
    }
    sendEmailBusiness(businessObj) {
        var mailOptions = {
            to: businessObj.businessEmail,
            subject: 'Job Applicant Confirmation',
            text: 'You have a job seeker that is looking to apply for this job. \n Email: ' + businessObj.workerEmail,
        };
        this.smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                console.log('error');
            }
            else {
                console.log('sent');
            }
        });
    }
}
exports.default = sendMail;
