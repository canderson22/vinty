const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vinty',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js'),
	mediaRoutes = require('./routes/media.js'),
	adminRoutes = require('./routes/admin.js'),
	ordersRoutes = require('./routes/orders.js')

mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)
app.use('/api/media', mediaRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/orders', ordersRoutes)

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})