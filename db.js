const Sequelize = require('sequelize');
const db = new Sequelize(
    'kioskdb','user1','user1pass',{
        host:'localhost',
        dialect:'mysql'
    }
)

const Categories = db.define('category',{
    name : {
        type : Sequelize.DataTypes.STRING(40),
        unique : true,
        allowNull : false
    }
})

const Products = db.define('product',{
    name : {
        type : Sequelize.DataTypes.STRING(40),
        unique : true,
        allowNull : false
    },
    price : {
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false
    },
    category : {
        type : Sequelize.DataTypes.STRING(40),
        allowNull : false
    },
    photoURL : {
        type : Sequelize.DataTypes.STRING(200),
        allowNull : false
    }

})


module.exports = {
    db,Categories,Products
}
// db.sync()
// .then(()=>{
//     console.log("ok ki report hai");
// })
// .catch(()=>{
//     console.log("na ji na");
// })




