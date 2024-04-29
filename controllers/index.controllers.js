const ModelUser = require("../userModel");

const controller = {}


controller.post =async (req,res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}

controller.get = async(req,res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta); 
}

controller.getId = async(req,res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
}

controller.put = async(req,res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({ _id: id}, body)
    res.send(respuesta);
}

controller.delete = async(req,res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id})
    res.send(respuesta);
}

module.exports = controller;