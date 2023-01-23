const app = require('./src/app.js')
const { conn } = require('./src/db.js');



conn.sync({ force: true }).then(() => {   // si tenes en true, renueva la base de datos

  app.listen(3000, () => {
    console.log('%s listening at 3000'); // eslint-disable-line no-console
  });
});