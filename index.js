 express  = require("express");

const app = express();
const port= 3000;

let company_name = "Hiematech";


app.use(express.static("public"))


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

app.get('/', (req, res) => {
    res.render("index.ejs", {
        appname: company_name ,
        page_title: 'Homepage',
    });
});

app.get("/electrical", (req, res) => {
    res.render("electrical.ejs",  {
        appname: company_name,
        page_title: 'Electricals'
    });
});

app.get("/smarthome", (req, res) => {
    res.render("smarthome.ejs",  {
        appname: company_name , 
        page_title:" Smarthomes"
    })
})

app.get("/about-us", (req, res) => {

    res.render("about.ejs", {
        appname: company_name, 
        page_title: "About us"
    });
});

app.get("/security", (req, res) =>{
    res.render("security.ejs",  {
        appname: company_name,
        page_title: "Security"
    });
});

app.get("/renewable-energy", (req, res) => {

    res.render("energy.ejs",  {
        appname: company_name,
        page_title: "Renewable Energy"
    });
});