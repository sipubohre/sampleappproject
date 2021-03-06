import React from 'react';
import {Helmet} from "react-helmet";
import Config from 'Config'
import HandleError from './handleerror'
import { BrowserRouter as Router, IndexRoute, Route, Link, Prompt, Switch} from 'react-router-dom'

export default class landingpage extends React.Component {
	constructor(props) {
	    super(props); 
	}

  	render() {
	    return (
	      <div>
	      	<Helmet>
	          <title>React basic setup</title>
	          <meta name="description" content= "This is basic setup of react"/>
	          <meta itemprop="name" content="react basic setup" />
	          <meta itemprop="description" content="This is a project named react basic setup" />
	        </Helmet>
	        <h2 style={{textAlign: 'center'}}> Four Pictures One word </h2>
			{/*here render its child component*/}
				<div className="children">
	        		{this.props.children}
				</div>
	        <div style={{textAlign: 'right'}}>Developed by- Dev bohre</div>
	      </div>
	    );
  	}
}