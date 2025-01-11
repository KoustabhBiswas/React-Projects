import {app} from '../config/config';
import { Casemiddleware } from './Casemiddleware';


export const Commonmiddleware = () =>{
    
    console.log("IN COMMON");
    Casemiddleware(app);
}
