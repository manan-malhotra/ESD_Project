const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
const products = {
    "cart1": {
        "name": "Casual T-shirt",
        "brand": "Highlander",
        "price": "349.00",
        "category": "MEN CLOTHING",
        "description": "Men Teal Green Slim Fit Tropical Printed Pure Cotton T-shirt.",
        "reviews": "29"
    },
    "cart2": {
        "name": "Indian Jersey",
        "brand": "Adidas",
        "price": "549.00",
        "category": "ATHLETIC CLOTHING",
        "description": "Men Blue Slim Fit Indian Jersey Pure Cotton.",
        "reviews": "123"
    },
    "cart3": {
        "name": "Regular Kurti",
        "brand": "Biba",
        "price": "999.00",
        "category": "WOMEN CLOTHING",
        "description": "Women Cream Regular Fit Kurti.",
        "reviews": "233"
    },
    "cart4": {
        "name": "Kurti & Dupatta",
        "brand": "Indo Era",
        "price": "1349.00",
        "category": "WOMEN CLOTHING",
        "description": "Women Blue Green Slim Fit Kurti & Dupatta.",
        "reviews": "23"
    },
    "cart5": {
        "name": "Casual Shirt",
        "brand": "Wrogn",
        "price": "349.00",
        "category": "MEN CLOTHING",
        "description": "Men Olive Slim Fit Casual Shirt.",
        "reviews": "23"
    },
    "cart6": {
        "name": "Formal Shirt",
        "brand": "Allen Solly",
        "price": "349.00",
        "category": "MEN CLOTHING",
        "description": "Men Cream Slim Fit Formal.",
        "reviews": "213"
    },
    "cart7": {
        "name": "Kids Shirt",
        "brand": "Liliput",
        "price": "349.00",
        "category": "BOYS CLOTHING",
        "description": "Boys Orange Slim Fit Sweater.",
        "reviews": "83"
    },
    "cart8": {
        "name": "Girls Dress",
        "brand": "Cherry",
        "price": "749.00",
        "category": "GIRLS CLOTHING",
        "description": "Girls Pink Slim Fit Girls Dress.",
        "reviews": "3"
    }
};
let cart = {
    "cart1": {
        "name": "Casual T-shirt",
        "price": "349.00",
        "quantity": "1",
        "display": "block"
    },
    "cart2": {
        "name": "Indian Jersey",
        "price": "549.00",
        "quantity": "2",
        "display": "block"
    },
    "cart3": {
        "name": "Regular Kurti",
        "price": "999.00",
        "quantity": "0",
        "display": "none"
    },
    "cart4": {
        "name": "Kurti & Dupatta",
        "price": "1349.00",
        "quantity": "0",
        "display": "none"
    },
    "cart5": {
        "name": "Casual Shirt",
        "price": "349.00",
        "quantity": "0",
        "display": "none"
    },
    "cart6": {
        "name": "Formal Shirt",
        "price": "349.00",
        "quantity": "0",
        "display": "none"
    },
    "cart7": {
        "name": "Kids Shirt",
        "price": "349.00",
        "quantity": "0",
        "display": "none"
    },
    "cart8": {
        "name": "Girls Dress",
        "price": "749.00",
        "quantity": "0",
        "display": "none"
    }
};
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(products));
  // res.sendStatus(404);
})
app.get('/cart', (req,res) => {
  console.log("/cart invoked");
  res.send(JSON.stringify(cart));
  // res.sendStatus(404);
})
app.get('/price', (req,res) => {
  let sum = 0;
  console.log("/cart invoked");
  for(let i in cart) {
    sum+=(cart[i].price * cart[i].quantity);
  }
  const temp = {"price":sum.toFixed(2)}
  res.send(JSON.stringify(temp));
  // res.sendStatus(404);
})
app.post('/cart', jsonParser, (req, res) => {
    console.log("/cart invoked");
    console.log(req.body);
    let temp = req.body.id;
    let q = req.body.quantity;
    console.log(q);
    for(let i in cart) {
        if(i == temp) {
        console.log(q);

            cart[i].quantity = Number(cart[i].quantity) + q;
            if(cart[i].quantity > 0) {
                cart[i].display = "block";
            }else{
                cart[i].display = "none";
            }
          if(cart[i].quantity < 0) {
              cart[i].quantity = 0;
          }
        }
    }
    res.send(JSON.stringify(req.body));
  })
app.post('/login', jsonParser, (req, res) => {
  console.log("Request body: " + req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }
  const isPasswordValid = (password) => {
    const validPassRegex = /pass+/;
    return (password == null || password.length < 8)? false: validPassRegex.test(password);
  }
  if(isEmailValid(email) && isPasswordValid(password)) {
    console.log("Auth success");
    res.send(JSON.stringify({
      email: email,
      name: email.substring(0, email.indexOf('@')),
      token: Math.random().toString(36).substring(2)
    }))
  } else {
    res.sendStatus(400);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})