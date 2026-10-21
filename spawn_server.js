const { spawn } = require('child_process');
const fs = require('fs');

// Ensure port 3000 is clean
try {
  require('child_process').execSync('lsof -ti:3000 | xargs -r kill -9');
} catch (e) {}

const out = fs.openSync('./server.log', 'a');
const err = fs.openSync('./server.log', 'a');

const subprocess = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '-p', '3000', '-H', '0.0.0.0'], {
  detached: true,
  stdio: ['ignore', out, err],
  env: process.env,
  cwd: __dirname
});

subprocess.unref();
console.log('Next.js dev server spawned with PID:', subprocess.pid);
process.exit(0);
