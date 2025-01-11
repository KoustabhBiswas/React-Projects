import axios from "axios";

export class Caseapis{
    getAllCases = (datalimit) => {
        return axios.get('http://192.168.0.147:3000/cases/caselist/' + datalimit, {
            headers: {
               origin: 'http://192.168.0.147:3000/'
            }
         });
    }

    getSelectedCase = (case_id_pk:number | string | undefined) => {
        // console.log("test" + case_id_pk);
        return axios.get('http://192.168.0.147:3000/cases/caselist/viewcasedtls/' + case_id_pk, {
            headers: {
               origin: 'http://192.168.0.147:3000/'
            }
         });
    }
    deleteCaseDate = (nextdatemapidpk:number) => {
        console.log(nextdatemapidpk);
        return axios.post('http://192.168.0.147:3000/cases/caselist/deletecase/' + nextdatemapidpk);
    }
}