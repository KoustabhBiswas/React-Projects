import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import { Datedisplay } from '../../../utils/Datedisplay';
import { Caseservices } from '../../../services/Caseservices';
import { Deletecase } from './Deletecase';
import { Casenextdate } from './Casenextdate';

const caseswal = withReactContent(swal);
export const Viewcasedtls = () => {
	const intialValue: any[] = [];
	const { caseidpk } = useParams();
	const [changeflag, setChangeFlag] = useState(0);
	const [data, setData] = useState(intialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	 
	let caseserviceobj = new Caseservices();
	// console.log(caseidpk);

	const setChildData = ()=>{
		setChangeFlag(changeflag+1);
	}
	useEffect(
		() => {

			caseserviceobj.casedtls(caseidpk).then(response => {
				setData(response.data);  // Set the data to state
				setLoading(false);       // Mark loading as complete
			}).catch((err: { message: React.SetStateAction<null>; }) => {
				setError(err.message);   // Handle any errors
				setLoading(false);       // Stop loading in case of error
			});


			// console.log(data);

		}, [changeflag]);
	// console.log(data); //editCaseNextDate(item.case_map_next_date_map_id_pk);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	return (
		<>

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
							<div className="card card-round ">
								<div className="card-body">
									<div className='row col-md-12'>
										<div className='table-responsive table-bordered table-hover'>
											<table className='table'>
												<thead>
													<tr>
														<th>Case No</th>
														<th>Party Name</th>
														<th>Opposition Party Name</th>
														<th>Case File Date</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>{data.casedtls[0].law_case_no}</td>
														<td>{data.casedtls[0].law_case_party_name}</td>
														<td>{data.casedtls[0].law_case_opposition_party}</td>
														<td><Datedisplay date={data.casedtls[0].law_case_file_date} /></td>
													</tr>
												</tbody>
											</table>
										</div>

									</div>



								</div>
							</div>
							<div className="card card-round">
								<Casenextdate casenextdatelist={data.casenextdatedtls} setChildDatafunc={setChildData} />

							</div>
						</div>
					</div>

				</div>
			</div>

		</>
	)
	// }
}
