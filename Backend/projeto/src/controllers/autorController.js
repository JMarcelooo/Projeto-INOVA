const { Sequelize } = require('sequelize');
const initModels = require('../models/init-models');
require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});
const models = initModels(sequelize);
const Autor = models.autor;

// CREATE
exports.createAutor = async (req, res) => {
  const { name, email, bond, department, campus, university } = req.body;

  if (!name || !email || !bond || !department || !campus || !university) {
    return res.status(400).json({
      success: false,
      error: "Todos os campos são obrigatórios"
    });
  }

  try {
    const novoAutor = await Autor.create(req.body);
    res.status(201).json({ success: true, data: novoAutor });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Erro ao criar autor",
      details: error.message
    });
  }
};

exports.getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll(); // 'Autor' é o model vindo de models.autor
    res.status(200).json(autores);
  } catch (error) {
    console.error("Erro ao buscar autores:", error);
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar autores',
      details: error.message
    });
  }
};

exports.getAutorByID = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id); // 'Autor' é o model vindo de models.autor
    res.status(200).json(autor);
  } catch (error) {
    console.error("Erro ao buscar autores:", error);
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar autores',
      details: error.message
    });
  }
};

exports.updateAutor = async (req, res) => {
  try {
    const { id } = req.params
    const autor = await Autor.findByPk(id);

    if (!autor){
      return res.status(404).json({
        error: 'Autor nao encontrado'
      })
    }

    await Autor.update({
        name: req.body.name,
        email: req.body.email,
        bond: req.body.bond,
        department: req.body.department,
        campus: req.body.campus,
        university: req.body.university
      },
      {
        where: {id: req.params.id}
      }
    );

   return res.status(200).json(autor)
  }
  catch (error){
    console.error("Erro ao buscar autores:", error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao buscar autores',
      details: error.message
    });
  }
}

exports.deleteAutor = async (req,res) => {
  try{
    const {id} = req.params;
    const autor = await Autor.findByPk(id);

    if (!autor){
      return res.status(404).json({
        error: 'Autor nao encontrado'
      })
    }
    await autor.destroy();
    return res.status(200).json({
      message: 'Autor deletado com sucesso'
    })
  } 
  catch (error){
    console.error("Erro ao buscar autores:", error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao deletar autor',
      details: error.message
    });
  }
}