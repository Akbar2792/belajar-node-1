var biodata = require('./biodata')

var nama = "Akbar Maulana";
var tempatLahir = 'Indramayu';
var tglLahir = '27 September 2002';
var alamat = 'Jl. Gunadewa 2';

console.log(`Nama : ${biodata.nama(nama)}`);
console.log(`Tempat Lahir : ${biodata.tempatLahir(tempatLahir)}`);
console.log(`Tanggal Lahir : ${biodata.tglLahir(tglLahir)}`);
console.log(`Alamat : ${biodata.alamat(alamat)}`);