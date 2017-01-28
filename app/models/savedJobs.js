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
});

var SavedJobs = mongoose.model("SavedJobs", SavedJobsSchema);
module.exports = SavedJobs;
