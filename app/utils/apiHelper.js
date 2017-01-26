var axios = require('axios')
var keys = require('../../jobApiKeys')

var authenticJobsKey = keys.authenticJobs

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
				location: params[1]
			}
			// headers: {
			// 	'Access-Control-Allow-Origin': '*',
			// 	'Content-Type': 'application/x-www-form-urlencoded',
			// 	'accept': 'application/json'
			// }
		})
	},
	// queries post route on server.js; updates MongoDB with new article
	postSaveToMyJobs: function(job) {
		return axios.post('/api/saved', {job: job})
	}
}

module.exports = helpers