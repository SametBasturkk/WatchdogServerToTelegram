var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
//send every 5 minutes

while (true) {
    exec('node chialog.js', { stdio: 'inherit' });
    execSync('sleep 180')
}