import { Router, type IRouter } from "express";
import healthRouter from "./health";
import boardRouter from "./board";

const router: IRouter = Router();

router.use(healthRouter);
router.use(boardRouter);

export default router;
