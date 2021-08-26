// download
const request = require('request');// or 'https' for https:// URLs
const fs = require('fs');


// request("https://github.com/trouvetonstaff/trouvetonstaff/releases/latest/download/trouvetonstaff").pipe(fs.createWriteStream("release"));

// exec
const { spawn } = require('child_process');
const child = spawn('./trouvetonstaff', []);

// use child.stdout.setEncoding('utf8'); if you want text chunks
child.stdout.on('data', (chunk) => {
  console.log(chunk.toString())
  // data from standard output is here as buffers
});


child.stderr.on('data', (chunk) => {
  console.log(chunk.toString())
  // data from standard output is here as buffers
});


child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
