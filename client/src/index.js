import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram'
import './styles.css'
import 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'



import App from './App'

ReactDOM.render(
	<Router><App /></Router>,
	document.getElementById('root')
)
