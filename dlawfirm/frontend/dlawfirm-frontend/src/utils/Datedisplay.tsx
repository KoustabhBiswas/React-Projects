import React from 'react'
import { format } from 'date-fns';
export const Datedisplay = ({ date }: any) => {
    const formattedDate = format(new Date(date), 'dd-MM-yyyy');

    return (
        <b>{formattedDate}</b>
    )
}
