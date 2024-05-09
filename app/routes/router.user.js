import {Router} from "express";

import { crearUser, eliminarUser, listarUser, modificarUser, mostrarUser, logueoUser } from "../controllers/controllers.user.js";
import { verifyToken } from "../middleware/oauth.js";

export const rutaUser = Router();

rutaUser.get("/user/:id", mostrarUser);

rutaUser.get("/user", listarUser);

rutaUser.post("/user", verifyToken, crearUser);

rutaUser.put("/user",verifyToken, modificarUser);

rutaUser.delete("/user", verifyToken, eliminarUser); 

rutaUser.post("/login", logueoUser);
