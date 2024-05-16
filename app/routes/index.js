import { Router } from "express";
import rutaMain from "./routes.main.js";
import { rutaUser } from "./router.user.js";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../tool/swagger-output.json';

const ruta = Router();
ruta.use("/",rutaMain);
ruta.use("/api", rutaUser);
ruta.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default ruta;

