import express from 'express';
import program from './config/commander.js';
import configObject from './config/index.js';
import cookieParser from 'cookie-parser'
import __dirname from './outils/dirname.js';
import appRouter from './vroutes/index.js'

const {mode} = program.opts();
console.log('Mode config: ' + mode);

const port = configObject.port;
const app = express();

// configuraciones de la App
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser(configObject.cookies_code))

app.use(appRouter);

// inicio servidor
app.listen(port, () => {
  console.log(`Server andando en port ${port}`);
});