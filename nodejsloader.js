// download
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("release");
const request = http.get("https://github.com/trouvetonstaff/trouvetonstaff/releases/latest/download/package.zip", function(response) {
  response.pipe(file);
});

// exec
const { spawn } = require('child_process');
const child = spawn('ls', ['-lh', '/usr']);

// use child.stdout.setEncoding('utf8'); if you want text chunks
child.stdout.on('data', (chunk) => {
  // data from standard output is here as buffers
});

// since these are streams, you can pipe them elsewhere
child.stderr.pipe(dest);

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
