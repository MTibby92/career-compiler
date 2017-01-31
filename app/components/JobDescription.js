var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var JobDescription = React.createClass({
	getInitialState: function() {
		return {
			selected : {}
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevProps.selected == this.props.selected) {
			// do nothing
		} else {
			this.setState({
				selected: {
					apply_url: this.props.selected.apply_url,
					auth_jobs_id: this.props.selected.auth_jobs_id,
					company_name: this.props.selected.company_name,
					company_url: this.props.selected.company_url,
					post_date: this.props.selected.post_date,
					save_date: this.props.selected.save_date,
					title: this.props.selected.title,
					type: this.props.selected.type,
					apply_date: this.props.selected.apply_date,
					contact_name: this.props.selected.contact_name,
					contact_info: this.props.selected.contact_info,
					last_contact_date: this.props.selected.last_contact_date,
					application_status: this.props.selected.application_status
				}
			})
		}
	},
	render: function() {
		return (
			<div className='row'>
				<div className='col-sm-8 col-sm-offset-2'>
					<div className='jumbotron'>
						<div className='row'>
							<div className='col-sm-10 col-sm-offset-1'>
								<table className="table table-hover">
									<tr>
										<td>Authentic Jobs ID:</td>
										<td>{this.state.selected.auth_jobs_id}</td>
									</tr>
								</table>
									<p><span>Authentic Jobs ID:</span><span className='text-right'>{this.state.selected.auth_jobs_id}</span></p>
									<p><span>Job Title:</span><span className='text-right'>{this.state.selected.title}</span></p>
									<p><span>Company Name:</span><span className='text-right'>{this.state.selected.company_name}</span></p>
									<p><span>Type of Position:</span><span className='text-right'>{this.state.selected.type}</span></p>
									<p><span>Application URL:</span><span className='text-right'>{this.state.selected.apply_url}</span></p>
									<p><span>Company Website:</span><span className='text-right'>{this.state.selected.company_url}</span></p>
									<p><span>Date of Job Post:</span><span className='text-right'>{this.state.selected.post_date}</span></p>
									<p><span>Date Job Saved:</span><span className='text-right'>{this.state.selected.save_date}</span></p>
									<p><span>Date of Application:</span><span className='text-right'>{this.state.selected.apply_date}</span></p>
									<p><span>Contact Name:</span><span className='text-right'>{this.state.selected.contact_name}</span></p>
									<p><span>Contact Info:</span><span className='text-right'>{this.state.selected.contact_info}</span></p>
									<p><span>Date of Last Contact:</span><span className='text-right'>{this.state.selected.last_contact_date}</span></p>
									<p><span>Status:</span><span className='text-right'>{this.state.selected.application_status}</span></p>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = JobDescription