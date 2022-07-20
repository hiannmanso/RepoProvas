import dotenv from 'dotenv'
import chalk from 'chalk'

import server from "./app.js";

dotenv.config()

server.listen(process.env.PORT||5000,()=>{
    console.log(chalk.italic.bold.hex('#ffbdd6')(`Backend up on PORT:${process.env.PORT}`))
})
