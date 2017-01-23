var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var Router = ReactStormpath.Router
var HomeRoute = ReactStormpath.HomeRoute
var LoginRoute = ReactStormpath.LoginRoute
var AuthenticatedRoute = ReactStormpath.AuthenticatedRoute


// var Router = ReactRouter.Router  already coming from stormpath router above
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var browserHistory = ReactRouter.browserHistory

var Header = require('../components/Header')
var Home = require('../components/Home')
var Login = require('../components/Login')
var SignUp = require('../components/SignUp')
var MyJobs = require('../components/MyJobs')

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Header}>
			<IndexRoute component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={SignUp} />
			<Route path="/myjobs" component={MyJobs} />
		</Route>
	</Router>
)

module.exports = routes