import React, { useState } from 'react';
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import { Caseservices } from '../../../services/Caseservices';

export const Addnewcase = () => {
    const initialValue: any = {
        'court_name': '',
        'case_no': '',
        'party_name': '',
        'opp_party_name': '',
        'case_file_date': '',
        'case_date': '',
        'case_status': ''
    };
    const formErrorMsg: any = {
        'court_name': '',
        'case_no': '',
        'party_name': '',
        'opp_party_name': '',
        'case_file_date': '',
        'case_date': '',
        'case_status': ''
    };
    const [formData, setFormData] = useState(initialValue);
    const [formErrorData, setFormErrorData] = useState(formErrorMsg);
    let caseserviceobj = new Caseservices();
    $(function () {
        $(".datepicker").datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayHighlight: true,
        }).on('change', (e) => {
            let index = e.target.name;
            let value = e.target.value;
            setFormData({ ...formData, [index]: value });
        });
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let index = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [index]: value });

    }
    console.log(formData);
    const validateForm = (fieldtype:string,fieldname:string,fieldvalue:string | number ,fieldlength:Number) =>{
        if(fieldtype == 'TEXT')
        {
            const pattern = '/[ a-zA-Z0-9]/g';
            if (fieldvalue == '' || fieldvalue == null) {
                setFormErrorData({ ...formErrorData, [formErrorData.court_name]: `${fieldname} field is required.` });
                return 'false';
            }
            else if (fieldvalue.length < fieldlength || fieldvalue.length > fieldlength) {
                setFormErrorData({ ...formErrorData, [formErrorData.fieldname]: `${fieldname} field cannot exceed ${fieldlength}.` });
                return 'false';
            }
            else if(!pattern.test(fieldvalue))
            {
                setFormErrorData({ ...formErrorData, [formErrorData.fieldname]: `${fieldname} field is not in correct format.` });
                return 'false';
            }
            else
            {
                return 'true';
            }
        }
        else if(fieldtype == 'NUMBER')
        {
            const pattern = '/[ a-zA-Z0-9]/g';
            if (fieldvalue == '' || fieldvalue == null) {
                setFormErrorData({ ...formErrorData, [formErrorData.court_name]: `${fieldname} field is required.` });
                return 'false';
            }
            else if (fieldvalue.length < fieldlength || fieldvalue.length > fieldlength) {
                setFormErrorData({ ...formErrorData, [formErrorData.fieldname]: `${fieldname} field cannot exceed ${fieldlength}.` });
                return 'false';
            }
            else if(!pattern.test(fieldvalue))
            {
                setFormErrorData({ ...formErrorData, [formErrorData.fieldname]: `${fieldname} field is not in correct format.` });
                return 'false';
            }
            else
            {
                return 'true';
            }
        }
        else if(fieldtype == 'NUMBER')
        {
            const pattern = '/[0-9]/g';
            if (fieldvalue == '' || fieldvalue == null) {
                setFormErrorData({ ...formErrorData, [formErrorData.court_name]: `${fieldname} field is required.` });
                return 'false';
            }
            else if (fieldvalue.length < fieldlength || fieldvalue.length > fieldlength) {
                setFormErrorData({ ...formErrorData, [formErrorData.fieldname]: `${fieldname} field cannot exceed ${fieldlength}.` });
                return 'false';
            }
            else if(!pattern.test(fieldvalue))
            {
                setFormErrorData({ ...formErrorData, [formErrorData.fieldname]: `${fieldname} field is not in correct format.` });
                return 'false';
            }
            else
            {
                return 'true';
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         console.log(formData);
        // if(validateForm('TEXT',))
        

    }
    return (
        <>
            {/* <Layout> */}

            <div className="container">
                <div className="page-inner">
                    <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
                        <div>
                            <h3 className="fw-bold mb-3">Dashboard</h3>
                            <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
                        </div>
                        <div className="ms-md-auto py-2 py-md-0">
                            <a href="#" className="btn btn-label-info btn-round me-2">
                                Manage
                            </a>
                            <a href="#" className="btn btn-primary btn-round">
                                Add Customer
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-round">

                                <div className="card-body">
                                    <form method="POST" onSubmit={(e) => { handleSubmit(e) }}>
                                        <div className="row">
                                            <div className='col-md-12 text-center'>
                                                <h3>Add New Case</h3>
                                                <hr />
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Court Name</b></span>
                                                    <input type="text" className="form-control" placeholder="Court Name" aria-label="Username" aria-describedby="basic-addon1" name='court_name' value={formData.court_name} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Case No</b></span>
                                                    <input type="text" className="form-control" placeholder="Case NO" aria-label="Username" aria-describedby="basic-addon1" name='case_no' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Party Name</b></span>
                                                    <input type="text" className="form-control" placeholder="Party Name" aria-label="Username" aria-describedby="basic-addon1" name='party_name' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Opposition Party Name</b></span>
                                                    <input type="text" className="form-control" placeholder="Opposition Party Name" aria-label="Username" aria-describedby="basic-addon1" name='opp_party_name' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Case File Date</b></span>
                                                    <input type="text" className="form-control datepicker" placeholder="Case File Date" aria-label="Username" aria-describedby="basic-addon1" name='case_file_date' onChange={(e) => handleChange(e)} readOnly />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Case Date</b></span>
                                                    <input type="text" className="form-control datepicker" placeholder="Case Date" aria-label="Username" aria-describedby="basic-addon1" name='case_date' onChange={(e) => handleChange(e)} readOnly />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><b>Case Status</b></span>
                                                    <textarea className="form-control" placeholder="Case Status" aria-label="Username" aria-describedby="basic-addon1" rows="7" name='case_status' onChange={(e) => handleChange(e)}></textarea>
                                                </div>
                                            </div>
                                            <div className='col-md-12  text-center '>
                                                <input type='submit' className='btn btn-outline-success text-bold' value={'SUBMIT'} style={{ width: 200 }} />
                                            </div>



                                            <div className="col-md-6">
                                                <div className="mapcontainer">
                                                    <div
                                                        id="world-map"
                                                        className="w-100"
                                                        style={{ height: 300 }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* </Layout> */}

        </>
    )
}
