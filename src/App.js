import React, { Component } from 'react';
import List from './List.js';
import Counter from './Counter.js';
import './styles/Stylesheet.css';
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
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
	}

	addProject(e) {
		if (e.keyCode === 13) {
			this.setState(function(prevState, props) {
        if (prevState.newProjectName === '')
          return {};

				return {
					projects: prevState.projects.concat([{
            id: prevState.projects.length,
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

  allowDrop(e) {
    e.preventDefault();
  }

  onDragStart(e, item) {
    this.draggedItem = item;
  }

  onDrop(e, index) {
    e.preventDefault();
    this.setState(function(prevState, props) {
      var findIndex = prevState.projects.findIndex(x => x.id === this.draggedItem.id);
      var project = prevState.projects[findIndex];
      project.status = index;
      prevState.projects[findIndex] = project;
      return {
        projects: prevState.projects
      }
    });
  }

  sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
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
    for(i = 0; i < states.length; i++) {
      states[i].items = this.sortByKey(states[i].items, 'name')
    }
		var projectListComponent = states.map((project, id) => {
			return <div key={id} className='col-md-4 col-xs-4' onDragOver={ this.allowDrop } onDrop={ () => this.onDrop(event, id) } >
				  <List title={project.title} items={project.items} 
            onDragStart={ this.onDragStart } />
			</div>
		})

	    return (
			<div className='container-fluid App'>
				<div className='row App-form'>
					<div className='col-md-10 col-xs-10'>
						<label className='App-label'>Add Project</label>
						<input className='App-input' type='text' value={ this.state.newProjectName } onChange={this.handleNewProjectInput} onKeyUp={ this.addProject }/>
					</div>
          <div className='col-md-2 col-xs-2'>
            <div className='row'>
              <div className='col-md-12 col-xs-12 App-total-label'>
                TOTAL
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 col-xs-12'>
                <Counter count={this.state.projects.length} caption='projects' className='CenterX' />
              </div>
            </div>
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
