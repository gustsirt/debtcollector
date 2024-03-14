import program from './config/commander.js';
import express from 'express';
import configObject, { connectDb } from './config/index.js';
import cors from 'cors';
import __dirname from './utils/dirname.js';
//import cookieParser from 'cookie-parser'
import { addLogger, logger } from './utils/logger.js';
import handleResponses from './middleware/handleResponses.js';
import passport from 'passport';
import initializePassport from './middleware/auth/passport.config.js';
import appRouter from './routes/index.js'


const {mode} = program.opts();
logger.info('Mode config: ' + mode);

const app = express();
connectDb()

// configuraciones de la App
app.use(cors()); //{ origin: configObject.cors_origin }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//app.use(cookieParser(configObject.cookies_code))
app.use(addLogger)
app.use(handleResponses)

// passport
app.use(passport.initialize())
initializePassport()

app.use(appRouter);

// inicio servidor
const port = configObject.port;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});