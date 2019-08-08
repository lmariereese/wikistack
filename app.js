const morgan = require('morgan');
const express = require('express');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views/index');
const layout = require('./views/layout')
const app = express();
const { db, Page, User } = require('./models');
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded( {extended: false} ));


app.get("/", async (req, res, next) => {
  res.send(layout(''));
});

db.authenticate().
then(() => {
  console.log('connected to the database');
});



const init = async () => {
  await db.sync({force: true});
  app.listen(PORT, () => {
    console.log('App listeninig in port 3000');
  });
}

init();


