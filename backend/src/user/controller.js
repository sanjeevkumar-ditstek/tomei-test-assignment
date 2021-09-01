const GetUsers = require('./service/get_users');
const AddUser = require('./service/add_user');
const UpUser = require('./service/up_user');
const DelUser = require('./service/del_user');
const bcrypt = require("bcrypt");
const fs = require('fs')

module.exports = (repository) => {
  const getUsers = (req, res, next) => {
    const getUsersCase = GetUsers(repository);
    getUsersCase.execute()
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  const delUser = (req, res, next) => {
    const delUser = DelUser(repository);
    delUser.execute(req.params.id)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  const addUser = async (req, res, next) => {
    const addUserCase = AddUser(repository);
    var { name, email, password, image } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    if (req.file)
      image = req.protocol + "://" + req.get('host') + "/" + req.file.path.replace("\\", "/");
    addUserCase.execute(name, email, password, image)
      .then(
        result => { res.json(result) },
        err => {
          if (req.file)
            fs.unlinkSync(req.file.path);
          next(err)
        }
      );
  }

  const upUser = async (req, res, next) => {
    const upUserCase = UpUser(repository);
    var { name, email, password, image } = req.body;
    var id = req.params.id;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
    }
    if (req.file)
      image = req.protocol + "://" + req.get('host') + "/" + req.file.path.replace("\\", "/");
    upUserCase.execute(id,name, email, password, image)
      .then(
        result => { res.json(result) },
        err => {
          if (req.file)
            fs.unlinkSync(req.file.path);
          next(err)
        }
      );
  }

  return {
    getUsers,
    addUser,
    upUser,
    delUser
  }
}
