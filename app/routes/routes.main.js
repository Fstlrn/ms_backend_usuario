import {Router} from "express";
import app from "../app.js";
import {MESSAGE} from "../message/msj.js";

const rutaMain = Router();



rutaMain.get("/home", (req, res)=>{
    res.json({"home": MESSAGE.HOME})
})

rutaMain.get("/galery", (req, res)=>{
    res.json({"galery": MESSAGE.GALERY})
})

rutaMain.get("/about", (req, res)=>{
    res.json({"about": MESSAGE.ABOUT})
})

rutaMain.get("/contact", (req, res)=>{
    res.json({"contact": MESSAGE.CONTACT})
})



// const app = express();

// app.set("home", mensaje.HOME);
// app.set("galery", mensaje.GALERY);
// app.set("about", mensaje.ABOUT);
// app.set("contact", mensaje.CONTACT);

// const mensaje = ( MESSAGE );


// // Rutas

// app.get("/home", (req, res) => {
//     res.json({
//         "home" :  app.get("home")
//     })
// })

// app.get("/gallery", (req, res) => {
//     res.json({
//         "gallery" :  app.get("gallery")
//     })
// })

// app.get("/about", (req, res) => {
//     res.json({
//         "about" :  app.get("about")
//     })
// })

// app.get("/contact", (req, res) => {
//     res.json({
//         "contact" :  app.get("contact")
//     })
// })


export default rutaMain;