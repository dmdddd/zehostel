//=============================================
// Initialization
//=============================================
let express = require('express');
// process.env.PORT Herokus env variable that heroku supplies for the port numer
let port = process.env.PORT || 3000;
let app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies

app.listen(port, () => {
	console.log('Hostel Manager is listening on port %d!', port);
});

//=============================================
// Database
//=============================================
//var default_layout = [{"name":"Floor 1","id":"floor1","rooms":[{"id":"room1","name":"Room 1","top":0,"left":40,"width":200,"height":60},{"id":"room2","name":"Room 2","top":60,"left":40,"width":60,"height":60},{"id":"room3","name":"Room 3","top":120,"left":40,"width":200,"height":60}]},{"name":"Floor 2","id":"floor2","rooms":[{"id":"room4","name":"Room 4","top":0,"left":40,"width":200,"height":60},{"id":"room5","name":"Room 5","top":60,"left":180,"width":60,"height":60},{"id":"room6","name":"Room 6","top":120,"left":40,"width":200,"height":60}]}];
var default_layout = [{"name":"123","id":"123","height":200,"width":1540,"rooms":[]},{"name":"123321","id":"123321","height":200,"width":1540,"rooms":[]}];
var user_saved_layout;

//=============================================
// HTML and css Pages
//=============================================

// Main page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/main.html');
});

// Edit Layout
app.get('/edit', (req, res) => {
	res.sendFile(__dirname + '/edit.html');
});


//=============================================
// Data Handling requests
//=============================================
app.get('/default_layout', (req, res) => {
  console.log(default_layout);
	res.send(default_layout);
});

app.get('/user_saved_layout', (req, res) => {
  console.log(user_saved_layout);
	res.send(user_saved_layout);
});

app.post('/user_saved_layout', (req, res) => {
  var result = {'success': true, 'message': 'Layout has been updated.'};
  var object = req.body;
  user_saved_layout = object;


  console.log("DEF");
  console.log(typeof default_layout);
  console.log("USERS");
  console.log(typeof user_saved_layout);
  console.log(object);

  res.send(result);
});

//=============================================
// User requests
//=============================================
// app.post('/Login', function(req, res){
  // var username = req.body.name;
  // var password = req.body.password;
  // var found = {'success': false, 'message': 'Username or password are wrong'};
  // var usersRef = admin.firestore().collection('Users').doc(username);
  // var serDoc = usersRef.get()
    // .then(doc => {
      // if (doc.exists && doc.data().password == password){
        // found.success = true;
        // found.message = "/Main";
        // found.name=doc.data().name;
        // res.send(found);
      // } else {
        // res.send(found);
      // }
    // })
    // .catch(err => {
      // console.log('Error getting document', err);
    // });
// });
