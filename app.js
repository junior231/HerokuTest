const express = require('express');
const path = require('path'); // path lets us navigate file system / folders
const hbs = require('hbs');

// heroku assigns a port when it deploys via the process (environment variables - comin)
// locally this will run @ port 3000; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; // a double pipe means "or"

const app = express();

app.use(express.static('public'));

// tell express to use the handlebars engine to render data
app.set('view engine', 'hbs');

// tell express to use the views folder to find its templates
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  console.log('at the home route');
  // res.sendFile(path.join(__dirname + '/views/index.html'));

  res.render('home');
  // this builds localhost:3000/views/index.html
})

app.get('/merch', (req, res) => {
  console.log('at the merch route');
  //res.sendFile(path.join(__dirname + '/views/contact.html'));
  // this builds localhost:3000/views/contact.html
  res.render('merch');
})


app.listen(port,  () => {
  console.log(`Server running at ${port}/`);
});