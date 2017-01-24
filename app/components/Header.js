var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var Link = ReactRouter.Link

var LoginLink = ReactStormpath.LoginLink
var LogoutLink = ReactStormpath.LogoutLink
var Authenticated = ReactStormpath.Authenticated
var NotAuthenticated = ReactStormpath.NotAuthenticated

var Header = React.createClass({
	render: function() {
		return (
			<div className="main-container">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<nav className="navbar navbar-default">
								<div className="container-fluid">
									<div className="navbar-header">
										<Link className="navbar-brand" to="/">career-compiler</Link>
									</div>
									<ul className="nav navbar-nav navbar-right">
										<NotAuthenticated>	
											<li>
												<Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
											</li>
										</NotAuthenticated>
										<NotAuthenticated>
											<li>
												<LoginLink to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</LoginLink>
											</li>
										</NotAuthenticated>
										<Authenticated>	
											<li>
												<Link to="/myjobs"><span className="glyphicon glyphicon-briefcase"></span> My Jobs</Link>
											</li>
										</Authenticated>
										<Authenticated>
											<li>
												<LogoutLink><span className="glyphicon glyphicon-off"></span> Logout
												</LogoutLink>
											</li>
										</Authenticated>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Header