import {success, error} from "../message/msj.js"
import pool from "../config/db.mysql.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken"
config();

export const crearUser = async(req,res)=>{
    const nombre = req.body.name;
    const correo = req.body.email;
    const contra = req.body.password;
    const claveSinCifrar = contra;
    try {
        const hash = await bcrypt.hash(claveSinCifrar, 2);
        const contra = hash;
        const respuesta = await pool.query(`CALL sp_crear('${nombre}','${correo}','${hash}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Usuario agregado");
        }else{
            error(req,res,400, "No se puede agregar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const mostrarUser = async(req,res)=>{
    let id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL sp_buscar(${id});`);
        console.log(respuesta);
        success(req,res,200,respuesta[0])
    } catch (err) {
        error(req, res, 500, err)
    }
};

export const listarUser = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_todo();`);
        console.log(respuesta);
        success(req,res,200,respuesta[0])
    } catch (err) {
        error(req, res, 500, err)
    }
};


export const modificarUser = async(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.name;
    const correo = req.body.email;
    const contra = req.body.password;
    try {
        const respuesta = await pool.query(`CALL sp_modify('${id}','${nombre}','${correo}','${contra}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Usuario modificado");
        }else{
            error(req,res,400, "No se puede modifikcar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const eliminarUser = async(req,res)=>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL sp_eliminar('${id}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Usuario eliminado");
        }else{
            error(req,res,400, "No se puede modificar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const logueoUser = async(req, res)=> {
    const {usuario, contra} = req.body;
    const hash = await bcrypt.hash(contra, 2);
    try {
        const respuesta = await pool.query(`CALL sp_buscarU('${usuario}')`);
        if(respuesta[0][0]==0){
            error(req,res,404,"Usuario no existente");
            return;
        }
        const match = await bcrypt.compare(contra, respuesta[0][0][0].password);
        if(!match){
            error(req, res, 401, "Clave errada");
            return;
        }
        let playload = {
            "usuario": usuario
        } 
        let token = jwt.sign(
            playload,
            process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            }
        );
        success(req,res,200,{token});
    } catch (e) {
        error(req, res, 500,"intente otra vez", e);
    }

};
