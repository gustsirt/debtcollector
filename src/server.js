import program from './config/commander.js';
import express from 'express';
import cors from 'cors';
import configObject, { MongoSingleton } from './config/index.js';
import cookieParser from 'cookie-parser'
import __dirname from './outils/dirname.js';
import appRouter from './vroutes/index.js'
import handleResponses from './cmiddleware/handleResponses.js';

const {mode} = program.opts();
console.log('Mode config: ' + mode);

const port = configObject.port;
const app = express();
MongoSingleton.getInstance();

// configuraciones de la App
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors())

app.use(cookieParser(configObject.cookies_code))
app.use(handleResponses)

app.use(appRouter);

// inicio servidor
app.listen(port, () => {
  console.log(`Server andando en port ${port}`);
});