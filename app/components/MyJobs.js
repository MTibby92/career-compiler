var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var moment = require('moment')

var JobDescription = require('./JobDescription')

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
	// handleRowClick: function(row) {
	// 	this.setState({
	// 		apply_url: row.apply_url,
	// 		auth_jobs_id: row.auth_jobs_id,
	// 		company_name: row.company_name,
	// 		company_url: row.company_url,
	// 		post_date: row.post_date,
	// 		save_date: row.save_date,
	// 		title: row.title,
	// 		type: row.type,
	// 		apply_date: row.apply_date,
	// 		contact_name: row.contact_name,
	// 		contact_info: row.contact_info,
	// 		last_contact_date: row.last_contact_date,
	// 		application_status: row.application_status
	// 	})
	// },
	// handleUpdateJob: function() {

	// },
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
			console.log(row._id)
			console.log(row, cellName, cellValue)

			apiHelper.updateMyJobs(row).then(function(response) {
				console.log(response)
			})

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

		function dateFormatter(cell, row) {
			if (cell) {
				return `${moment(cell).format('ll')}`
			} else {
				return ''
			}
		}

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
						selected: {
							monogo_id: row._id,
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
						}
				})
				// this.handleRowClick(row)
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
							<TableHeaderColumn dataField='apply_date' dataFormat={ dateFormatter} editable={{type: 'datetime'}} width='150'>Date of Application</TableHeaderColumn>
							<TableHeaderColumn dataField='contact_name'>Contact Name</TableHeaderColumn>
							<TableHeaderColumn dataField='contact_info'>Contact Info</TableHeaderColumn>
							<TableHeaderColumn dataField='last_contact_date' dataFormat={ dateFormatter} editable={{type: 'date'}} width='150'>Date of Last Contact</TableHeaderColumn>
							<TableHeaderColumn dataField='application_status'>Status</TableHeaderColumn>
						</BootstrapTable>
					</div>
				</div>
				<JobDescription selected={this.state.selected} />
			</div>
		)
	}
})

module.exports = MyJobs