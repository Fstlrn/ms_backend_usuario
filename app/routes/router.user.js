import {Router} from "express";

import { crearUser, eliminarUser, modificarUser, mostrarUser } from "../controllers/controllers.user.js";

export const rutaUser = Router();

rutaUser.get("/user", mostrarUser);

rutaUser.post("/user", crearUser);

rutaUser.put("/user",modificarUser);

rutaUser.delete("/user", eliminarUser);