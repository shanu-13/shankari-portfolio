import { spawn } from 'child_process';

// Start backend server
const backend = spawn('node', ['server.js'], { stdio: 'inherit' });

// Start frontend dev server
const frontend = spawn('npm', ['run', 'dev'], { stdio: 'inherit', shell: true });

process.on('SIGINT', () => {
  backend.kill();
  frontend.kill();
  process.exit();
});