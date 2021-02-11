const { Article } = require('./models')

const query = {
    where: { id: 1 }
}
Article.update({
        approved: false
    }, query).then(() => {
        console.log("article telah di update")
        process.exit()
    })
    .catch(err => {
        console.error("gagal update")
    })