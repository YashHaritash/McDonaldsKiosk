const express = require('express');
const { FLOAT, NUMBER } = require('sequelize');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require('./db').db;
const Categories = require('./db').Categories;
const Products = require('./db').Products;

app.use('/',express.static(__dirname+'/public'))

app.use('/admin',express.static(__dirname+'/admin'));

app.use('/display',express.static(__dirname+'/display'));

app.post('/admin/category', async (req, res) => {
    try {
        const category = await Categories.create({
            name: req.body.name
        });
        res.status(201).send(category);
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).send({
            msg: "Unable to add new category"
        });
    }
});

app.get('/admin/category',async (req,res)=>{
    try {
        const category = await Categories.findAll();
        res.status(200).send(category);
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).send({
            msg: "Problem fetching categories"
        });
    }
})

app.post('/admin/product', async (req, res) => {
    try {
        const product = await Products.create({
            name: req.body.name,
            price: parseFloat(req.body.price),
            category : req.body.category,
            photoURL : req.body.photoURL
        });
        res.status(201).send(product);
    } catch (error) {
        console.error('Error adding Product:', error);
        res.status(500).send({
            msg: "Unable to add new Product"
        });
    }
});

app.get('/admin/product', async (req, res) => {
    try {
        const products = await Products.findAll();
        res.status(201).send(products);
    } catch (error) {
        console.error('Error adding Product:', error);
        res.status(500).send({
            msg: "Unable to fetch Products"
        });
    }
});

db.sync()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server Running at http://localhost:3000");
    })
})
.catch(()=>{
    console.log("na ji na");
})
