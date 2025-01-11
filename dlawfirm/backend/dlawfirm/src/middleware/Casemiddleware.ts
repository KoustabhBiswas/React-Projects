import { Application } from 'express';

import { router as caseroute } from '../routes/Caseroutes';
export const Casemiddleware = (app:Application) => {
    console.log("IN CASE");
    app.use('/cases/caselist/',caseroute);
}