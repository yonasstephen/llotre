import React, { Component } from 'react';
import List from './List.js'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const STATUS = {
	0: 'To Do',
	1: 'In Progress',
	2: 'Done'
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newProjectName: '',
			projects: []
		}

		this.addProject = this.addProject.bind(this);
		this.handleNewProjectInput = this.handleNewProjectInput.bind(this);
	}

	addProject(e) {
		if (e.keyCode === 13) {
			this.setState(function(prevState, props) {
				return {
					projects: prevState.projects.concat([{
						name: prevState.newProjectName,
						status: 0
					}]),
					newProjectName: ''
				};
			});
		}
	}

	handleNewProjectInput(e) {
		this.setState({ newProjectName: e.target.value })
	}

	render() {
		var states = [];
		var i;
		for(i = 0; i < Object.keys(STATUS).length; i++) {
			states.push({
				title: STATUS[i],
				items: []
			});
		}
		var projects = this.state.projects;
		for(i = 0; i < projects.length; i++) {
			states[projects[i].status].items.push(projects[i]);
		}

		var projectListComponent = states.map(function(project, id) {
			return <div key={id} className='col-md-4 col-xs-4'>
				<List title={project.title} items={project.items} />
			</div>
		})

	    return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-12 col-xs-12'>
						<label>Add Project</label>
						<input id='add-project' type='text' placeholder='Project name' value={ this.state.newProjectName } onChange={this.handleNewProjectInput} onKeyUp={ this.addProject }/>
					</div>
				</div>
				<div className='row'>
					{projectListComponent}
				</div>
			</div>
	    );
  	}
}

export default App;
