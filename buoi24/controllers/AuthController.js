const User = require('../models/User')

module.exports = {
    index: async (req, res)=>{
        const user = User.findAll();
        console.log(user);
    }
}