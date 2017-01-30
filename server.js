var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var logger = require('morgan')
var sequelize = require('sequelize')
var stormpath = require('express-stormpath')
var mongoose = require('mongoose')
var SavedJobs = require('./app/models/savedJobs')
var Promise = require('bluebird')

mongoose.Promise = Promise

// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 3000

// Initializes Stormpath SDK
app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
  // ,website:true
}))

// Sets up the Express app to handle data parsing
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))


// handles web versus local DB connection
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
} else {
	mongoose.connect('mongodb://localhost/careerCompiler')
}

var db = mongoose.connection

db.on('error', function(err) {
  console.log('Mongoose Error: ', err)
})

db.once('open', function() {
  console.log('Mongoose connection successful.')
})



// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static(process.cwd() + '/dist'))

// serves index.html
app.get('/', function(req, res) {
	res.send('./dist/index.html')
})

// pulls first 5 saved articles from the database and sorts by published date
app.get('/api/saved', function(req, res) {
	console.log('Find Jobs route triggered')
	SavedJobs.find({}).exec(function(err, doc) {
			if (err) {
				console.log(err)
			}
			else {
				// console.log(doc)
				res.json(doc)
			}
		})
})

// adds new article to the database; need to convert date from string to date
app.post('/api/saved', function(req, res) {
	console.log(req.body.job)
	SavedJobs.create({
		apply_url: req.body.job.apply_url,
		auth_jobs_id: req.body.job.id,
		company_name: req.body.job.company.name,
		company_url: req.body.job.company.url,
		post_date: Date.parse(req.body.job.post_date),
		save_date: Date.now(),
		title: req.body.job.title,
		type: req.body.job.type.name
	}, function(err) {
		if (err) {
			console.log(err)
		}
		else {
			res.send("Job saved to MyJobs")
		}
	})
})

// // deletes document from database based on title match
// app.delete('/api/saved', function(req, res){
// 	SavedArticles.findOne({title: req.body.article.title}, function(err, doc) {
// 		if(err) {
// 			console.log(err)
// 		} else {
// 			doc.remove()
// 			res.send(doc)
// 		}
// 	})
// })

// necessary for React router browser history; must go last in order to not conflict with other get routes
app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// initializes stormpath with server
app.on('stormpath.ready', function() {
	app.listen(PORT, function (err) {
		if (err) {
			return console.error(err)
		}
		console.log('App listening on PORT ' + PORT)
	})
})
	