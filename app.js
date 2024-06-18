var express  = require("express");
var http = require('http');
var path = require("path");
const app = express();

app.use(express.static("public"))

const port= 3000;
let company_name = "Hiematech Systems";


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
app.get('/', (req, res) => {
    res.render("index.ejs", {
        appname: company_name ,
        page_title: 'Homepage', 
        metadesc: "Join the ranks of businesses and homes leveraging Hiematech's comprehensive suite of products.",
    });
});

app.get("/electrical", (req, res) => {
    res.render("electrical.ejs",  {
        appname: company_name,
        page_title: 'Electricals',
        metadesc: ""
    });
});

app.get("/smarthome", (req, res) => {
    res.render("smarthome.ejs",  {
        appname: company_name , 
        page_title:" Smarthomes",
        metadesc: "",
    })
})

app.get("/about-us", (req, res) => {

    res.render("about.ejs", {
        appname: company_name, 
        page_title: "About us",
        metadesc: ''
    });
});

app.get("/security", (req, res) =>{
    res.render("security.ejs",  {
        appname: company_name,
        page_title: "Security", 
        metadesc: ""
    });
});

app.get("/renewable-energy", (req, res) => {

    res.render("energy.ejs",  {
        appname: company_name,
        page_title: "Renewable Energy",
        metadesc: ""
    });
});