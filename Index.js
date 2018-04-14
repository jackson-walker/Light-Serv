var PORT = 6969;
var HOST = '127.0.0.1';

var datagram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + "+" address.port);
});
