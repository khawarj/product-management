import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3200;
const app = express();
const compiler = webpack(config);
const productRoutes = require('./routes/routes');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/api/product', productRoutes);

app.get('/', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get('*', function(req, res){
    res.status(404).send('what???');
});

app.use(function(err, req, res, next){
    if (err ) {
        console.log(err);
        res.send('Something went wrong...');
    } else {
        next(err);
    }
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});