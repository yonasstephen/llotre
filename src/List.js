import React, { Component } from 'react';
import ListItem from './ListItem.js'
import './styles/List.css';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: props.items
		};
	}

	render() {
		var listItems = this.props.items.map(function(item, id) {
			return <ListItem key={id} text={item.name} />;
		})

		return <div className='List'>
			<div className='List-header'>{this.props.title}</div>
			<div className='List-content'>
				{listItems}
			</div>	
		</div>;
	}
}

export default List;