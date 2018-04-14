var PORT = 6969;
var HOST = '127.0.0.1';

var datagram = require('dgram');
var server = datagram.createSocket('udp4');

function outputUTCTime(){
  var time = new Date();
  var sUTCTime = 
  return
}
function getMonth(iMonth){
  var months = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11,
  }
}

console.log("Server boot initiated at: " + Date().UTCHours() + ":" + Date().UTCMinutes() + ":" + Date().UTCSeconds());

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote){
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT);
