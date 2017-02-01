var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var moment = require('moment')

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
					monogo_id: this.props.selected.monogo_id,
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
							<div className='col-sm-12'>
								<table className="table table-hover table-responsive">
									<colgroup>
										<col className="col-sm-3" />
										<col className="col-sm-9" />
									</colgroup>
									<tbody>
										<tr>
											<td>Authentic Jobs ID:</td>
											<td>{this.state.selected.auth_jobs_id}</td>
										</tr>
										<tr>
											<td>Job Title:</td>
											<td>{this.state.selected.title}</td>
										</tr>
										<tr>
											<td>Company Name:</td>
											<td>{this.state.selected.company_name}</td>
										</tr>
										<tr>
											<td>Type of Position:</td>
											<td>{this.state.selected.type}</td>
										</tr>
										<tr>
											<td>Application URL:</td>
											<td>{this.state.selected.apply_url}</td>
										</tr>
										<tr>
											<td>Company Website:</td>
											<td>{this.state.selected.company_url}</td>
										</tr>
										<tr>
											<td>Date of Job Post:</td>
											{this.state.selected.post_date ?
												<td>{moment(this.state.selected.post_date).format('ll')}</td>
												:
												<td></td>
											}
										</tr>
										<tr>
											<td>Date Job Saved:</td>
											{this.state.selected.save_date ?
												<td>{moment(this.state.selected.save_date).format('ll')}</td>
												:
												<td></td>
											}
										</tr>
										<tr>
											<td>Date of Application:</td>
											{this.state.selected.apply_date ?
												<td>{moment(this.state.selected.apply_date).format('ll')}</td>
												:
												<td></td>
											}
										</tr>
										<tr>
											<td>Contact Name:</td>
											<td>{this.state.selected.contact_name}</td>
										</tr>
										<tr>
											<td>Contact Info:</td>
											<td>{this.state.selected.contact_info}</td>
										</tr>
										<tr>
											<td>Date of Last Contact:</td>
											{this.state.selected.last_contact_date ?
												<td>{moment(this.state.selected.last_contact_date).format('ll')}</td>
												:
												<td></td>
											}
										</tr>
										<tr>
											<td>Status:</td>
											<td>{this.state.selected.application_status}</td>
										</tr>
									</tbody>
								</table>							
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = JobDescription