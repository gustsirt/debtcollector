import { Router } from "express";

const router = Router();

router.use('/api/users/', () => {});
router.use('/api/clients/', () => {});
router.use('/api/products/', () => {});
router.use('/api/payments/', () => {});
router.use('/api/messages/', () => {});


export default router;