require(`${process.cwd()}/models/movie`);
const mongoose = require('mongoose');
const Movie = mongoose.model('movie');


const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8069 
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: async (request, h) =>{
        const lst = await Movie.find();

        return list;
    }
});

server.route({
    method: 'GET',
    path:'/api/movies', 
    handler: async (request, h) =>{
        const lst = await Movie.find();

        return lst;
    }
});

server.route({
    method: 'GET',
    path:'/api/movies/{id}', 
    handler: async (request, h) => {
        
        return await Movie.findOne({id:request.params.id});

    }
});

server.route({
    method: 'POST',
    path:'/api/movies', 
    handler: async (request, h) => {
        let movie = new Movie(request.payload);
        await movie.save();
        return 'success';

    }
});

server.route({
    method: 'PUT',
    path:'/api/movies/{id}', 
    handler: async (request, h) => {
              
       
        return await  Movie.findByIdAndUpdate(
            request.params.id,
            {$set:request.payload},
            {new:true}
        );
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