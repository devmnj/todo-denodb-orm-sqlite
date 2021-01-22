import Controller from '../controllers/Controller.ts';
import { oak } from '../deps.ts';
const router = new oak.Router();
router.get('/about', Controller.index)
router.post('/todo', Controller.newTodo)
router.get('/todo/:id', Controller.findById)
router.put('/todo/:id', Controller.update)
router.delete('/todo/:id', Controller.delete)
router.get('/', Controller.index)
export default router;