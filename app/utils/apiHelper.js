var axios = require('axios')
var keys = require('../../jobApiKeys')

var authenticJobsKey = process.env.AUTHENTIC_JOBS_KEY || keys.authenticJobs

var helpers = {
	getAuthenticJobs: function(params) {
		// var queryString = 'https://authenticjobs.com/api/?api_key=9d6efd898d1e1081a62364b9e7bdaa74&method=aj.jobs.search&format=json'
		// queryString += '&' + $.param({
		// 	'keywords': params[0],
		// 	'location': params[1]
		// })
		// return axios.get(queryString)
		return axios.get('https://authenticjobs.com/api/?', {
			params: {
				api_key: authenticJobsKey,
				method: 'aj.jobs.search',
				format: 'json',
				keywords: params[0],
				location: params[1],
				page: params[2]
			}
			// headers: {
			// 	'Access-Control-Allow-Origin': '*',
			// 	'Content-Type': 'application/x-www-form-urlencoded',
			// 	'accept': 'application/json'
			// }
		})
	},
	// queries get route on server.js; makes call to MongoDB for saved jobs
	getSaveToMyJobs: function() {
		return axios.get('/api/saved')
	},
	// queries post route on server.js; updates MongoDB with new job
	postSaveToMyJobs: function(job) {
		return axios.post('/api/saved', {job: job})
	},
	// posts updates made from MyJobs table
	updateMyJobs: function(job) {
		return axios.post('/api/update', {job: job})
	},
	getJobSaveStatus: function(id) {
		return axios.get(`/api/is_saved/${id}`)
	},
	deleteSavedJob: function(jobID) {
		return axios({
			method: 'delete',
			url: '/api/saved',
			data: {
				id: jobID
			}
		})
	}
}

module.exports = helpers