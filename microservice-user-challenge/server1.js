const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Models
global.Challenge = require('./api/models/ChallengeModel');
global.User = require('./api/models/UserModel');
// global.Category = require('./api/models/WasteCategoryModel');
// global.Item = require('./api/models/WasteItemModel');

// Routestest
const ChallengeRoutes = require('./api/routes/ChallengeRoutes');
const UserRoutes = require('./api/routes/UserRoutes');
// const CategoryRoutes = require('./api/routes/WasteCategoryRoutes');
// const ItemRoutes = require('./api/routes/WasteItemRoutes');

// MongoDB
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);


mongoose.connect(`mongodb://root:example@mongo:27018/`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB', err));



// mongoose.connect(process.env.MONGO_URL || 'mongodb://root:example@localhost:27018/', 
//     { useNewUrlParser: true, useUnifiedTopology: true }
// ).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('MongoDB connection error:', err);
// });


// mongoose.connect('mongodb://root:example@mongo:27018/', 
//     { useNewUrlParser: true, useUnifiedTopology: true }
// );





// Setup the port for server here
const port = process.env.PORT || 3002;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // This is for form data

// Register routes
ChallengeRoutes(app);
UserRoutes(app);
// CategoryRoutes(app);
// ItemRoutes(app);

// Start the server
app.listen(port, () => {
    console.log(`Server1 started on port ${port}`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

