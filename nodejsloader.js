// download
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("release");
const request = http.get("http://github.com/trouvetonstaff/trouvetonstaff/releases/latest/download/trouvetonstaff", function(response) {
  response.pipe(file);
});

// exec
const { spawn } = require('child_process');
const child = spawn('ls', ['-lh', '/usr']);

// use child.stdout.setEncoding('utf8'); if you want text chunks
child.stdout.on('data', (chunk) => {
  // data from standard output is here as buffers
});



child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
