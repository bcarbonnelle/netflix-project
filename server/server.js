const mongoose = require('mongoose')
const movie = mongoose.model('movie')
'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8069 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: async (request, h) =>{
        const lst = await movie.find();

        console.log(lst.length)
        //return 'hello world';
    }
});

server.route({
    method: 'GET',
    path:'/api/movies', 
    handler: async (request, h) =>{
        const lst = await movie.find();

        console.log(lst.length)
        //return 'hello world';
    }
});

server.route({
    method: 'GET',
    path:'/api/movies/{id}', 
    handler: function (request, h) {

        return 'detail film' + request.params.id;
    }
});


// Start the server
async function start() {

    try {
        await server.start();
        const mongoose = require('mongoose')
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/portal',(err) => {
        if(err) console.log('db connection fail')
        console.log('mongodb connection success')
})

    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();