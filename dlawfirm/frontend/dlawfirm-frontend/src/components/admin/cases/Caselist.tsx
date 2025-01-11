import React, { useEffect, useMemo, useState } from 'react'
import jwt from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode';
import { Layout } from '../Layout'
import { Datedisplay } from '../../../utils/Datedisplay';
import { Link } from 'react-router-dom';
 

import { Caseservices } from '../../../services/Caseservices';




export const Caselist = () => { 
  const intialValue: any[] = [];
  const [caselist, setCaseList] = useState(intialValue);
  const jwtSecret = "1234567890123456";
  // console.log("TEST")
  let caseserviceobj = new Caseservices();
  
  useMemo(() => {
     
    caseserviceobj.caselist().then((response) => {
      setCaseList(response.data); 
      });

    
  }, []); 





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
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive table-hover table-sales">
                          
                          <table className='table'>
                            <thead>
                              <tr>
                                <th>Sl</th>
                                <th>Case No</th>
                                <th>Party Name</th>
                                <th>Opposition Party Name</th>
                                <th>Case File Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                               {caselist.map((item,index)=>(
                                   <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.law_case_no}</td>
                                    <td>{item.law_case_party_name}</td>
                                    <td>{item.law_case_opposition_party}</td>
                                    <td><Datedisplay date={item.law_case_file_date} /></td>
                                    <td><Link to={`/cases/viewcasedtls/${item.law_case_id_pk}`} className='btn btn-sm btn-outline-info'><b>View</b></Link></td>
                                   </tr> 
                                        
                               ))}
                              <tr>

                              </tr>
                            </tbody>
                          </table>
                          
                        </div>
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
