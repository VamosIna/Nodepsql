const { Article } = require('./models')
Article.create({
        title: 'hello word',
        body: 'Lorem Ipsum Dolor',
        approved: true
    })
    .then(article => {
        console.log(article)
    })