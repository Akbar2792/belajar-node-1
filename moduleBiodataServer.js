var http = require('http');
var biodata = require('./biodata');

var nama = 'Akbar Maulana';
var tempatLahir = 'Indramayu';
var tglLahir = '27 September 2002';
var alamat = 'Jl. Gunadewa 2';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h3>Nama : ${biodata.nama(nama)}</h3>`);
  res.write(`<h3>Tempat Lahir : ${biodata.tempatLahir(tempatLahir)}</h3>`);
  res.write(`<h3>Tanggal Lahir : ${biodata.tglLahir(tglLahir)}</h3>`);
  res.write(`<h3>Alamat : ${biodata.alamat(alamat)}</h3>`);
  res.end();
}).listen(8002);