import Router from "express";
import Controllers from "./controllers.js";

const router = Router();

router.get('/messages', Controllers.getAll);
router.post('/messages', Controllers.add);
router.get('/messages/:id', Controllers.getOne);
router.put('/messages', Controllers.update);
router.delete('/messages/:id', Controllers.delete);

export default router;