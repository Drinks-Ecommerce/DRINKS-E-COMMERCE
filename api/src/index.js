import app from './app.js'
import { sequelize } from './db/db.js';

async function main() {
    try {
        await sequelize.sync({ force: true })
        console.log('The connection was successful')
        app.listen(3000)
        console.log('Server is listening on port', 3000);
    } catch (error) {
        console.log('Connection error', error)
    }
}

main();