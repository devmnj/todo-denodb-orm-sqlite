import { DenonConfig } from './deps.ts';
const config: DenonConfig = {
scripts: {
 start: {
cmd: 'deno run main.ts',
 desc: 'run my main.ts file',
},
},
 'allow': [
 'run',
 'read',
 'write',
'plugin'
]
};
export default config;