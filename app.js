//https://github.com/cthackers/adm-zip/wiki/ADM-ZIP-Introduction
process.argv.forEach(function (val,index,array){
	console.log(index + ' : ' + val);
});

var z = require('zip');
var fs = require('fs');
var data = fs.readFileSync('test.zip');
var reader = z.Reader(data);

console.log(reader.toObject('utf-8'));
reader.forEach(function (entry){
	console.log(entry);
});
reader.iterator();