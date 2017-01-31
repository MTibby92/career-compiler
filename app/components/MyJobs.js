var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var apiHelper = require('../utils/apiHelper')

var ReactBsTable = require("react-bootstrap-table")
var BootstrapTable = ReactBsTable.BootstrapTable
var TableHeaderColumn = ReactBsTable.TableHeaderColumn

var MyJobs = React.createClass({
	getInitialState: function() {
		return {
			jobs: [],
			selected: {}		
		}
	},
	// runs when the component first loads
	// pulls in saved jobs from the database on load
	componentDidMount: function() {
		apiHelper.getSaveToMyJobs().then(function(response) {
			if (response.data !== this.state.jobs) {
				this.setState({
					jobs: response.data
				})
			}
			console.log(response)
			console.log(response.data)
		}.bind(this))
	},
	render: function() {
		var myJobs = this.state.jobs
		// [
		// 	{
		// 		apply_url: 'test',
		// 		auth_jobs_id: 'test',
		// 		company_name: 'test',
		// 		company_url: 'test',
		// 		post_date: 'test',
		// 		save_date: 'test',
		// 		title: 'test',
		// 		type: 'test'
		// 	}
		// ]

		function onBeforeSaveCell(row, cellName, cellValue) {
			// You can do any validation on here for editing value,
			// return false for reject the editing
			console.log(row, cellName, cellValue)

			return true
		}

		// var selectRow = {
		// 	mode: 'checkbox',
		// 	bgColor: 'lightblue', 
		// 	hideSelectColumn: true,  
		// 	clickToSelect: true,
		// 	onSelect: function(row, isSelected, e) {
		// 		console.log('The following row was clicked:', row)
		// 		console.log(isSelected)
		// 		console.log(e)
		// 	}
		// };

		var cellEditProp = {
			mode: 'dbclick',
			blurToSave: true,
			beforeSaveCell: onBeforeSaveCell
		}

		var options = {
			onRowClick: function(row) {
				console.log('The following row was clicked:', row)
				console.log(this)
				this.setState({
					apply_url: row.apply_url,
					auth_jobs_id: row.auth_jobs_id,
					company_name: row.company_name,
					company_url: row.company_url,
					post_date: row.post_date,
					save_date: row.save_date,
					title: row.title,
					type: row.type,
					apply_date: row.apply_date,
					contact_name: row.contact_name,
					contact_info: row.contact_info,
					last_contact_date: row.last_contact_date,
					application_status: row.application_status
				})
			}.bind(this)
		}

		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-12'>
						<BootstrapTable data={myJobs} options={ { noDataText: 'This is custom text for empty data' }, options } cellEdit={ cellEditProp } striped hover condensed pagination>
							<TableHeaderColumn isKey dataField='auth_jobs_id' editable={ false } hidden>Authentic Jobs ID</TableHeaderColumn>
							<TableHeaderColumn dataField='title' editable={ false }>Job Title</TableHeaderColumn>
							<TableHeaderColumn dataField='company_name' editable={ false }>Company Name</TableHeaderColumn>
							<TableHeaderColumn dataField='type' editable={ false } hidden>Type of Position</TableHeaderColumn>
							<TableHeaderColumn dataField='apply_url' editable={ false } hidden>Application URL</TableHeaderColumn>
							<TableHeaderColumn dataField='company_url' editable={ false } hidden>Company Website</TableHeaderColumn>
							<TableHeaderColumn dataField='post_date' editable={ false } hidden>Date of Job Post</TableHeaderColumn>
							<TableHeaderColumn dataField='save_date' editable={ false } hidden>Date Job Saved</TableHeaderColumn>
							<TableHeaderColumn dataField='apply_date' editable={{type: 'datetime'}}>Date of Application</TableHeaderColumn>
							<TableHeaderColumn dataField='contact_name'>Contact Name</TableHeaderColumn>
							<TableHeaderColumn dataField='contact_info'>Contact Info</TableHeaderColumn>
							<TableHeaderColumn dataField='last_contact_date' editable={{type: 'date'}}>Date of Last Contact</TableHeaderColumn>
							<TableHeaderColumn dataField='application_status'>Status</TableHeaderColumn>
						</BootstrapTable>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-8 col-offset-2'>
						<div className='jumbotron'>
							<div className='row'>
								<div className='col-sm-4'>
									<p>Authentic Jobs ID:</p>
									<p>Job Title:</p>
									<p>Company Name:</p>
									<p>Type of Position:</p>
									<p>Application URL:</p>
									<p>Company Website:</p>
									<p>Date of Job Post:</p>
									<p>Date Job Saved:</p>
									<p>Date of Application:</p>
									<p>Contact Name:</p>
									<p>Contact Info:</p>
									<p>Date of Last Contact:</p>
									<p>Status:</p>
								</div>
								<div className='col-sm-8'>
									<p>{this.state.selected.apply_url}</p>
									<p>{this.state.selected.auth_jobs_id}</p>
									<p>{this.state.selected.company_name}</p>
									<p>{this.state.selected.company_url}</p>
									<p>{this.state.selected.post_date}</p>
									<p>{this.state.selected.save_date}</p>
									<p>{this.state.selected.title}</p>
									<p>{this.state.selected.type}</p>
									<p>{this.state.selected.apply_date}</p>
									<p>{this.state.selected.contact_name}</p>
									<p>{this.state.selected.contact_info}</p>
									<p>{this.state.selected.last_contact_date}</p>
									<p>{this.state.selected.application_status}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = MyJobs