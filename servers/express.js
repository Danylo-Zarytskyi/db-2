import createError from 'http-errors';
import express from 'express';
import path from 'node:path';
import logger from 'morgan';
import Model from '../models/notices.js';

// import question from "../bin/runners/mongo.js";
// import notices from '../bin/runners/mongo.js';

import mainRouter from '../routes/main.js';

const app = express();

app.set('views', path.join(process.cwd(), './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', mainRouter);

app.use((req, res, next) => {
    next(createError(404));
});

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err: {};

//     res.status(err.status || 500);
//     res.render('error');
// })

export default app;