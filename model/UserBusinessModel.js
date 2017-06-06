"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class UserBusinessModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            businessID: Number,
            firstName: String,
            lastName: String,
            email: String,
            address: String,
            city: String,
            zipcode: String,
            jobTags: String,
            companyName: String,
            description: String,
            companyLicenseNo: String,
            username: String,
            password: String,
            pictureID: Number,
            subscribers: Array,
            tags: Array,
            employees: Array,
        }, { collection: 'userBusiness' });
    }
    createModel() {
        this.model = mongooseConnection.model("userBusiness", this.schema);
    }
    retreiveAll(response) {
        var query = this.model.find({});
        query.exec((err, businessArray) => {
            response.json(businessArray);
        });
    }
    retreiveOne(res, filter) {
        let query = this.model.findOne(filter);
        query.exec((err, oneBusinessUser) => {
            res.json(oneBusinessUser);
        });
    }
}
exports.default = UserBusinessModel;
