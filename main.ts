import { oak } from './deps.ts';
import { dotenv } from './deps.ts';
import router from './routes/routes.ts'


const env = dotenv.config()
const app = new oak.Application();
const PORT = +env.PORT || 3000 //+convert it number 
const HOST = env.APP_HOST  
app.use(router.routes())
app.use( ()=>{});
app.listen({ port:PORT });
console.log(`Server running ${HOST} on port ${PORT}`);
