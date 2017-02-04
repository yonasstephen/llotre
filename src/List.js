import React, { Component } from 'react';
import ListItem from './ListItem.js';
import Counter from './Counter.js';
import './styles/List.css';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: props.items
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			items: nextProps.items
		});
	}

	render() {
		var listItems = this.props.items.map((item, id) => {
			return <ListItem key={id} text={item.name} 
			onDragStart={ () => this.props.onDragStart(event, item) } />;
		})

		return <div className='List'>
			<div className='List-header row'>
				<div className='col-md-8 col-xs-8'>
					{this.props.title}
				</div>
				<div className='col-md-4 col-xs-4'>
					<Counter count={this.state.items.length} caption='projects' />
				</div>
			</div>
			<div className='List-content'>
				{listItems}
			</div>	
		</div>;
	}
}

export default List;