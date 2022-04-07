import {Sequelize} from 'sequelize'

const db=new Sequelize('blog_db','abel','@bl3009',{
    host:'localhost',
    dialect:'mysql'
})

export default db