import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import Example from './Example';
import Example2 from './Example2';


 export default class RootComponent extends Component{
	
	render(){
		return(
			<div>
				<Example/>
				<Example2/>
			</div>

			)
		}
}