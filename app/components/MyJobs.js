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
			jobs: []			
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

		var cellEditProp = {
			mode: 'dbclick',
			blurToSave: true,
			beforeSaveCell: onBeforeSaveCell
		}

		var options = {
			defaultSearch: ''
		}

		return (
			<div className='row'>
				<div className='col-sm-12'>
					<BootstrapTable data={myJobs} options={ { noDataText: 'This is custom text for empty data' }, options } cellEdit={ cellEditProp } striped hover condensed pagination>
						<TableHeaderColumn isKey dataField='auth_jobs_id' editable={ false }>Authentic Jobs ID</TableHeaderColumn>
						<TableHeaderColumn dataField='title' editable={ false }>Job Title</TableHeaderColumn>
						<TableHeaderColumn dataField='company_name' editable={ false }>Company Name</TableHeaderColumn>
						<TableHeaderColumn dataField='type' editable={ false }>Type of Position</TableHeaderColumn>
						<TableHeaderColumn dataField='apply_url' editable={ false }>Application URL</TableHeaderColumn>
						<TableHeaderColumn dataField='company_url' editable={ false }>Company Website</TableHeaderColumn>
						<TableHeaderColumn dataField='post_date' editable={ false }>Date of Job Post</TableHeaderColumn>
						<TableHeaderColumn dataField='save_date' editable={ false }>Date Job Saved</TableHeaderColumn>
						<TableHeaderColumn dataField='apply_date' editable={{type: 'datetime'}}>Date of Application</TableHeaderColumn>
						<TableHeaderColumn dataField='contact_name'>Contact Name</TableHeaderColumn>
						<TableHeaderColumn dataField='contact_info'>Contact Info</TableHeaderColumn>
						<TableHeaderColumn dataField='last_contact_date' editable={{type: 'datetime'}}>Date of Last Contact</TableHeaderColumn>
						<TableHeaderColumn dataField='application_status'>Status</TableHeaderColumn>
					</BootstrapTable>
				</div>
			</div>
		)
	}
})

module.exports = MyJobs