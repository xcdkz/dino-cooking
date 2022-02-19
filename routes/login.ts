import { Router } from 'https://deno.land/x/oak@v10.2.1/mod.ts';

import controller from '../controllers/login.ts';

const router = new Router();

router.post('/login', controller.login);

export default router;