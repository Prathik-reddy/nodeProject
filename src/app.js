const express = require('express');
require('./db/conn')
const userDetails = require('./models/userDetails')
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

// setting the path
const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.urlencoded({
    extended: false
}));
app.set('views', viewsPath);
app.set('partials', partialsPath);

hbs.registerPartials(partialsPath);
// middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/css", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));


app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/service', (req, res) => {
    res.render('service');
})

app.post('/contact', async (req, res) => {
    try {
        // res.send(req.body);
        const userdata = new userDetails(req.body);
        await userdata.save();
        res.status(201).render("index"); // 201 means the req has been fulfilled and a new resource has been created
        // alert("Form Submitted");
    } catch (error) {
        res.status(500).send(error);
    }
})
app.listen(port, () => {
    console.log(`server running at ${port}`);
});