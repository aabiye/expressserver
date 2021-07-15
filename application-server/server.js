const express = require("express");
const path = require('path'); //a node native module
const {Item} = require('./models/index');
const {Restaurant} = require('./models/index')

const app = express();
const port = 3000;

//Q: What does express.static help us do?
//Q: What do you think path.join helps us do?
app.use(express.static(path.join(__dirname, 'public')))

//will add routes
// 1)client makes a request -> request URL -> URL -> http request -> http response
app.get('/items', async (req, res) => {
    //goes into the database and looks for all Items
    const allItems = await Item.findAll()
    //server will respond with all the items found in the database
    res.json(allItems)
    })

app.get('/restaurants', async (req, res) => {
    const allRest = await Restaurant.findAll()
    res.json(allRest)
    })
    
app.get('/flipcoin', async (req,res) => {
    const flipcoin = Math.floor(Math.random() * 2 + 1 )
    const result = flipcoin === 1 ?  console.log('Heads') : console.log('Tails')    
    res.send(result) //how do i get it to show in the localhost?
})

//Q: What will our server be doing?
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
