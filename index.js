/*** Required External Modules */
const express= require('express');
const path=require('path')

/*** App Variables */
let app=express();
const port=8000;
app.set('view engine','pug')
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
/***  App Configuration */

// app.get('/',(req,res)=>{
//   res.send('WHATS-UP: Food For Devs')
// })


/*** Routes Definitions */
app.get('/', (req, res) => res.render('index',{title:"Home"}))
app.get("/user", (req, res) => {
  res.render("user", {title:"Profile", userProfile:{nickname:"Auth0"}});
});
app.get('/logout', (req, res) => res.redirect('/'))



/*** Server Activation */
app.listen(port,()=>{console.log('express Running')})
