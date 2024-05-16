const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require('./model/auth');
// const userModel=require('./model/user')

const orderRoutes =require('./route/orderRoutes')
                                              
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());
app.use('/api/order', orderRoutes)

mongoose.connect("mongodb://localhost:27017/login-sign")
.then(console.log("DB connected"))
.catch(err =>console.log(err))
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // password hashing
    bcrypt.hash(password, 10)
        .then(hash => {
            authModel.create({ name, email, password: hash })
                .then(user => res.json({ status: "success" }))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    authModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie("token", token);
                        return res.json({ status: "success", role: user.role });
                    } else {
                        return res.status(401).json({ status: "error", message: "Incorrect password" });
         
                    }
                });
            } else {
                return res.status(404).json({ status: "error", message: "User not found" });
            }
        })
        .catch(err => res.status(500).json({ status: "error", message: "Internal server error" }));
});

const varifyUser=(req,res,next)=> {
    const token=req.cookie.token
    if(!token) {
        return res.json("token misssing")
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=> {
            if(err) {
                return res.json("error on token")
            }else {
                if(jwt.decoded.role==="admin" ) {
                    next()
                }else {
                    return res.json("not admin")
                }
            }
        })
    }
}

app.get('/dashboard',varifyUser,(req,res)=> {
    res.json("success")
})


app.get('/showall', (req, res) => {
  authModel.find({}, 'name email role')
      .then(users => res.json(users))
      .catch(err => console.log(err));
})





app.listen(3000, () => console.log('Server running on port 3000'));