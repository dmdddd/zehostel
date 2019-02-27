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
var floors = []

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
