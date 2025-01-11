import express, { Router, Request, Response } from "express";
import { Casecontrollers } from "../controllers/Casecontrollers";

export const router = express.Router();

let caseobj = new Casecontrollers();
router.get('/:limit', (req: Request, res: Response) => {
    caseobj.caselist(req, res);
});
router.get('/viewcasedtls/:caseidpk', (req: Request, res: Response) => {
    caseobj.casedtls(req, res);
});

router.post('/deletecase/:caseidpk', (req: Request, res: Response) => {
    caseobj.deletecase(req, res);
});

router.post('/addcase/:caseidpk', (req: Request, res: Response) => {
    caseobj.addcase(req, res);
});

router.post('/addnewcase', (req: Request, res: Response) => {
    caseobj.addnewcase(req, res);
});