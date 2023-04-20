const mongoose = require('mongoose')
const articleModel = require('./models/articles')


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true/* , useUnifiedTopology: true */})
}
main().then(() => {
    console.log('conexão estabelecida com sucesso')
}).catch(err => console.log(err));


const Article = mongoose.model("Article", articleModel);

const artigo = new Article({
    title: 'React do zero' ,
    author: 'Ranielly Teixeira' ,
    body: 'as a odkpaosdpao dkpasdkpasdkpa osd kpapdoapdappaoskdpaoskd',
    resume:{
        content: "bla bla bla",
        author: "Douglas Silva"
    }
});


//POST
/* artigo.save().then(() => {
    console.log('Artigo salvo com sucesso!')
}).catch(err => {
    console.log(`Error: ${err}`)
}) */


//FIND
/* Article.find({  */
    /* se açterar o find por findOne o mongoose vai limitar a busca em apenas 1 objeto */
/*     'resume.author':'Douglas Silva'
}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
}) */


// DELETE
/* Article.deleteMany({
    'author': 'Laura Leticia'
}).then(() =>{
    console.log('Conteudo deletado')
}).catch(err => {
    console.log(`err: ${err}`)
}) */


/* Article.find({}) */



/* updated */
Article.findByIdAndUpdate('6440350373acd12f9ae9b416', {
    title: 'new title',
    author: 'unknow',
    resume:{
        content: 'new content new content new content new content',
        author: 'new sub author'
    }
}).then(() =>{
    console.log('Updated!!')
}).catch(err => console.log(err))