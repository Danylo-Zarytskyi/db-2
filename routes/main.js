import { Router } from "express";
import addNotice from '../ctrl/notices.js';
import { parseNotice } from "../ctrl/notices.js";

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', async (req, res) => {
    addNotice(req.body);
    const result = await parseNotice();
    res.json({ result });
});

export default router;