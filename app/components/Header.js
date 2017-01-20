var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

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
										<li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
										<li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
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