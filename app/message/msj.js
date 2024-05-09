export const MESSAGE =  {"HOME": "HOLA HOME", "GALERY": "HOLA GALLERY", "ABOUT": "HOLA ABOUT", "CONTACT": "HOLA CONTACT"}

export const msjconsole = "Estoy en el puerto: http://localhost:";

export const error = (req, res, status=500, mensaje="no")=>{
    res.status(status).json({
        error:true,
        status:status,
        body:mensaje
    })
};

export const success = (req, res, status=200, mensaje="")=>{
    res.status(status).json({
        error:false,
        status:status,
        body:mensaje
    })
};

