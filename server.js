
const express = require('express');


// set routes
// const routes = require('./server1_quote/routes');
// const routes = require('./server2_animal/routes');
// const routes = require('./server3_message/routes');

const routes = require('./server4_login/routes');


// listen 8000

const app = routes(express());

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on 8000'));