const express = require("express");
const path = require('path'); //a node native module
const {Item, Restaurant, Menu} = require('./models/index');

const app = express();
const port = 3000;


//app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())


// find all items
app.get('/items', async (req, res) => {
    const allItems = await Item.findAll()
    res.json(allItems)
    })

// find all restaurants 
app.get('/restaurants', async (req, res) => {
    const allRest = await Restaurant.findAll()
    res.json(allRest)
    })

// find all menus
app.get('/menus', async (req, res) => {
        const allMenus = await Menu.findAll()
        res.json(allMenus)
        })

// heads and tails 
app.get('/flipcoin', async (req,res) => {
    const flipcoin = Math.floor(Math.random() * 2 + 1 )
    const result = flipcoin === 1 ?  'Heads' : 'Tails'
    res.send(result) 
})

// Add restaurant by id
app.get('/restaurants/:id', async (req, res) => {
	const restaurant = await Restaurant.findByPk(req.params.id);
	res.json({ restaurant })
})

// Add menu by id
app.get('/menus/:id', async (req, res) => {
	const menu = await Menu.findByPk(req.params.id);
	res.json({ menu })
})

// Add new restaurant
app.post('/restaurants', async (req, res) => {
	const newRestaurant = await Restaurant.create(req.body);
	res.send('Restaurant added!')
})

// Add new menu
app.post('/menus', async (req,res) => {
    const addMenu = await Menu.create(req.body) ;
    res.send('Menu added!')

})

// Update a restaurant 
app.put("/restaurants/:id", async (req, res) => {
	let updateRest = await Restaurant.update(req.body, {
		where : {id : req.params.id} 
	})
	res.send("Restaurant Updated!!")
})

// update menu
app.put('/menus/:id', async (req,res) => {
    const updateMenu = await Menu.update(req.body, {
        where : {id : req.params.id} 
    })
    res.send('Menu Updated!!')
} )

// Delete a restaurant
app.delete('/restaurants/:id', async (req, res) => {
    const delRest = await Restaurant.destroy({
        where : {id : req.params.id}
    })
    res.send('Restaurant deleted!')
})

// Delete a menu
app.delete('/menus/:id', async (req, res) => {
    const delMenu = await Menu.destroy({
        where : {id : req.params.id}
    })
    res.send('Menu deleted!')
})



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
