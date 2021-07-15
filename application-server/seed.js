const {sequelize} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    name: 'Lalibela',
    location: 'Texas',
    cuisine: 'Ethiopian'
  },
  {
    name: 'Dama',
    location: 'VA',
    cuisine: 'Ethiopian'
  },
  {
    name: 'Dukum',
    location: 'DC',
    cuisine: 'Ethiopian'
  }
]

const seedMenu = [
  {
    title: 'Appetizer'
  },
  {
    title: 'Breakfast'
  },
  {
    title: 'Lunch'
  },
  {
    title: 'Dinner'
  },
  {
    title: 'Drink'
  },

]

const seedItem = [
  {
    name: 'Tibs',
    image: 'someimage.jpg',
    price: 16.50,
    vegetarian: true
  },
  {
    name: 'Doro Wet',
    image: 'someimage.jpg',
    price: 12.99,
    vegetarian: false
  },
  {
    name: 'Veggie Combo',
    image: 'someimage.jpg',
    price: 15.99,
    vegetarian: true
  }
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })

