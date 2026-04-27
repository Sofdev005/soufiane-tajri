const { spawn } = require('child_process');
const fs = require('fs');

const logFile = fs.openSync('/home/z/my-project/dev.log', 'a');

const child = spawn(
  '/home/z/my-project/node_modules/.bin/next',
  ['dev', '-p', '3000'],
  {
    detached: true,
    stdio: ['ignore', logFile, logFile],
    cwd: '/home/z/my-project'
  }
);

child.unref();
console.log('Started detached PID:', child.pid);
