
const express = require('express');


// set routes

// const routes = require('./server0_demo/routes');
// const routes = require('./server1_quote/routes');
// const routes = require('./server2_animal/routes');
// const routes = require('./server3_message/routes');
// const routes = require('./server4_login/routes');
// const routes = require('./server5_api/routes');
// const routes = require('./server6_1955/routes');
// const routes = require('./server7_postman/routes');
const routes = require('./server8_CRUD/routes');


const app = routes(express());

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on 8000'));
