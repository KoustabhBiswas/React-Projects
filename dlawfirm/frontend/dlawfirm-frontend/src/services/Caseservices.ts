import axios from "axios"
import { BASE_URL } from "../config/config"
import { Casemodel } from "../models/Casemodel";

export class Caseservices { 
    caselist = () => {
        return axios.get(BASE_URL + 'cases/caselist/20',{
            headers:{
                origin: 'http://localhost:5173/'
            }
        });
    }

    casedtls = (caseidpk: string | number | undefined) => {
        return axios.get(BASE_URL + 'cases/caselist/viewcasedtls/' + caseidpk, {
            headers: {
                origin: 'http://localhost:5173/'
            }
        });
    }

    deleteCase = (nextdatemapidpk: number) => {
        return axios.post(BASE_URL + 'cases/caselist/deletecase/' + nextdatemapidpk);
    }

    addCase = (nextdatemapidpk: number,caseobj:Casemodel) => {
        return axios.post(BASE_URL + 'cases/caselist/addcase/' + nextdatemapidpk,caseobj);
    }

    addNewCase = (caseobj)=>{
        return axios.post(BASE_URL + 'cases/caselist/addnewcase',caseobj);
    }
}