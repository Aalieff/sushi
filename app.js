const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.static('public'));
app.use(express.static('node_modules/@fortawesome/fontawesome-free'));

app.get("/", (req, res)=>{
  const data = {
    title: "beranda"
  }
  res.render("index", data)
})

app.listen(port, ()=>{
  console.log("server ok")
})
