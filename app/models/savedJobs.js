var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SavedJobsSchema = new Schema({
	apply_url: {
		type: String
	},
	auth_jobs_id: {
		type: String
	},
	company_name: {
		type: String
	},
	company_url: {
		type: String
	},
	post_date: {
		type: Date
	},
	save_date: {
		type: Date
	},
	title: {
		type: String
	},
	type: {
		type: String
	},
	apply_date: {
		type: Date
	},
	contact_name: {
		type: String
	},
	contact_info: {
		type: String
	},
	last_contact_date: {
		type: Date
	},
	application_status: {
		type: String
	}
});

var SavedJobs = mongoose.model("SavedJob", SavedJobsSchema);
module.exports = SavedJobs;
