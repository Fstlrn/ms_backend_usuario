import {success} from "../message/msj.js"

export const crearUser = (req,res)=>{
    const dato = req.body;
    console.log(dato);
    success(req, res, 201, "Nyny")
};

export const mostrarUser = (req,res)=>{
    success(req,res,200,"Kaynuwi")
};

export const modificarUser = (req,res)=>{
    const dato = req.body;
    success(req, res, 200, "Modificado")
};

export const eliminarUser = (req,res)=>{
    const dato = req.body;
    success(req, res, 200, "Eliminado")
};

