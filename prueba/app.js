
const http = require('http');


const ejemplo = function(req, res){
    console.log('bdehejhdjehjej')
    res.write('Hi')
    res.end()
}
const server = http.createServer(ejemplo)
server.listen(8080, () => {
    console.log('Escuchando')
})

// const server = http.createServer(ejemplo);
// server.listen(8080, () => {
// });
console.log('XXXXXXXXXXXX');

