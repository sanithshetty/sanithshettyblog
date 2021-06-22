const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');

const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//mongodb connection
const dbURI = 'mongodb+srv://sanithshetty:Angadibettu1@nodetuts.bupt1.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true })
.then((result) => app.listen(3000))             //listen for request, starting the server
.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//usig middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));            //to get the data from the form
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
app.get('/', (req, res) =>{
    res.redirect('/blogs');       
});

app.get('/about', (req, res) =>{
    res.render('about', {title: 'About'});
});

//blog routes
app.use('/blogs',blogRoutes);       //it will '/blogs' in beggining to every routes in blogRoutes


//404 pages, use function runs everytime!! so when there is no route function then this will work, always in the bottom 
app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});       //only for 404 we need to set status...for other status will be set automatically
});