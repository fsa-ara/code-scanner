import { execFile } from 'node:child_process';
import os from 'node:os';

const nI = os.networkInterfaces();

const cmd = 'mkcert';
const host = ['localhost', '127.0.0.1', '::1'];

let networkIp = Object.values(nI)
    .flat()
    .find((v) => v.family === 'IPv4' && !v.internal)?.address;

if (networkIp) host.push(networkIp);

execFile(cmd, host, (error, stdout, stderr) => {
    if (error) console.error(`mkcert failed: ${error.message}`);

    if (stdout) console.log(stdout);

    if (stderr) console.log(stderr);
});
