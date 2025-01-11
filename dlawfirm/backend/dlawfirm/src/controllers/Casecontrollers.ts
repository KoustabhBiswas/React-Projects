import { Request, Response } from "express";
import { Casemodel } from "../models/Casemodel";
import { Encryption } from "../utils/Encryption";
import { Dbconfig } from "../config/Dbconfig";
import { QueryTypes } from "sequelize";


export class Casecontrollers {
    encrypt = new Encryption();
    caselist = async (req: Request, res: Response) => {
        // let allcase = await Casemodel().findAll();
        // res.send(JSON.stringify(this.encrypt.encryptData(allcase)));
        let allcase = await Dbconfig().query("SELECT * FROM law_case order by law_case_file_date desc limit :limit ", {
            type: QueryTypes.SELECT,
            replacements: {
                limit: Number(req.params.limit)
            }
        });
        res.send(JSON.stringify(allcase));
    }
    casedtls = async (req: Request, res: Response) => {
        let caseidpk: string = req.params.caseidpk;

        let casedtls = await Dbconfig().query("SELECT law_case_id_pk,law_case_no,law_case_party_name,DATE_FORMAT(law_case_file_date,'%Y-%m-%d') as law_case_file_date,law_court_desc,law_case_opposition_party from law_case WHERE law_case_id_pk=:casepk", {
            type: QueryTypes.SELECT,
            replacements: { casepk: caseidpk }
        });

        let casenextdatedtls = await Dbconfig().query("SELECT next_date,case_map_next_date_map_id_pk,case_status from law_case_next_date_map WHERE law_case_id_pk=:casepk and active_status=1 ORDER BY next_date ASC", {
            type: QueryTypes.SELECT,
            replacements: { casepk: caseidpk }
        });

        let casedtlsall = {
            'casedtls': casedtls,
            'casenextdatedtls': casenextdatedtls
        };
        console.log(casedtlsall);
        res.send(JSON.stringify(casedtlsall));
    }

    deletecase = async (req: Request, res: Response) => {
        // console.log("testr");
        // res.send("test");
        const updatearr = {
            active_status: '0'
        };
        let updatestat = await Dbconfig().query(`UPDATE law_case_next_date_map SET active_status=:active_status WHERE case_map_next_date_map_id_pk = :case_map_next_date_map_id_pk`, {
            type: QueryTypes.UPDATE,
            replacements: {
                active_status: 0,
                case_map_next_date_map_id_pk: req.params.caseidpk
            }
        });
        console.log(updatestat);
        res.send(JSON.stringify(updatestat));
    }

    addcase = async (req: Request, res: Response) => {
        let updatestat = await Dbconfig().query(`UPDATE law_case_next_date_map SET case_status=:case_status , next_date=:next_date WHERE case_map_next_date_map_id_pk = :case_map_next_date_map_id_pk`, {
            type: QueryTypes.UPDATE,
            replacements: {
                case_status: req.body.casestatusfield,
                next_date: req.body.casenextdatefield,
                case_map_next_date_map_id_pk: req.params.caseidpk
            }
        });
        res.send(JSON.stringify(updatestat));
    }

    addnewcase = async (req: Request, res: Response) => {
        const sqlqry = `INSERT INTO law_case (
law_case_no,
law_case_party_name,
law_case_file_date,
law_case_opposition_party,
law_court_desc,
entry_time,
entry_ip,
 
active_status )
VALUES
(:law_case_no,
:law_case_party_name,
:law_case_file_date,
:law_case_opposition_party,
:law_court_desc,
:entry_time,
:entry_ip,
:active_status)`;

        let updatestat = await Dbconfig().query(sqlqry, {
            type: QueryTypes.UPDATE,
            replacements: {
                case_status: req.body.casestatusfield,
                next_date: req.body.casenextdatefield,
                case_map_next_date_map_id_pk: req.params.caseidpk
            }
        });
        res.send(JSON.stringify(updatestat));
    }
}