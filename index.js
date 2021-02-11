const express = require('express')
const { Article } = require('./models')
const app = express();
const port = 3000
const bodyParser = require("body-parser")


//middleware
app.use(express.json())
    // parse application/json
app.use(bodyParser.json())
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
    //get artic

app.get('/api/v1/articles', (req, res) => {
    Article.findAll().then(articles => {
        res.status(200).json(articles)
    })
})

//get articles byId
app.get('/api/v1/articles/:id', (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    }).then(articles => {
        res.status(200).json(articles)
    })
})

//POST or create articles
app.post('/api/v1/articles', (req, res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body

    }).then(article => {
        res.status(201).json(article)
    }).catch(err => {
        res.status(422).json("Yahh, ga bisa bikin article nih. coba lagi yaa")
    })
})

//put or update
app.put('/api/v1/articles/:id', (req, res) => {
    Article.update({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }, {
        where: { id: req.params.id }
    }).then(article => {
        res.status(201).json(article)
    }).catch(err => {
        res.status(422).json("gabisa update wleek")
    })
})

//delete
app.delete('/api/v1/articles/:id', (req, res) => {
    Article.destroy({
        where: { id: req.params.id }
    }).then(articles => {
        res.status(200).json(articles)
        console.log("pesan terhapus")
    })
})

app.listen(port, () => console.log(`servernya nyala nih, ${port}!`))