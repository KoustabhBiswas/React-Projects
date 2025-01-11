import React, { useState } from 'react'

export const Deletecase = () => {
    let initialValue = 0;
	const [value, setValue] = useState(initialValue);
    const onConfirm = () => {
		setValue(1);
		
		 
	}
     
    return (
        <>
            <div className="   ">

                <div className="card-body">
                    <p>Are you sure to delete ?</p>
                    <button className='btn btn-sm btn-outline-success' onClick={onConfirm}>Confirm</button><span>&nbsp;</span>
                    <button className='btn btn-sm btn-danger'>Cancel</button>
                </div>
            </div>
        </>
    )
}
