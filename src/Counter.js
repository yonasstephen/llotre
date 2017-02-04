import React, { Component } from 'react';
import classnames from 'classnames';
import './styles/Counter.css';

class Counter extends Component {

	render() {
		return <div className={classnames('Counter', this.props.className)}>
			<label className='Counter-count'>{this.props.count}</label>
			<label className='Counter-caption'>{this.props.caption}</label>
		</div>;
	}
}

export default Counter;