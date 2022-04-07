import {Sequelize} from 'sequelize'

const db=new Sequelize('blog_db','abel','Indira2475',{
    host:'localhost',
    dialect:'mysql'
})

export default db