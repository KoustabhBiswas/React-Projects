import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import { Datedisplay } from '../../../utils/Datedisplay';
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import { Caseservices } from '../../../services/Caseservices';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const caseswal = withReactContent(swal);
export const Casenextdate: React.FC = (props) => {
	const changeflag = 0;
	let [error, errorcasestatusmsg, errorcasenextdatemsg] = [0, '', ''];
	const formdata = { 'casestatusfield': '', 'casenextdatefield': '' };
	const formdataerrormsg = { 'errorcasestatusmsg': '', 'errorcasenextdatemsg': '','successmsg':'' };
	const [editflag, setEditFlag] = useState([0, 0]);
	const [editdata, setEditData] = useState(formdata);
	const [errordata, setErrorData] = useState(formdataerrormsg);
	let caseserviceobj = new Caseservices();
	$(function () {
		$("#datepicker").datepicker({
			format: 'yyyy-mm-dd',
			autoclose: true,
			todayHighlight: true,
		}).on('change', (e) => {
			let index = e.target.name;
			let value = e.target.value;
			setEditData({ ...editdata, [index]: value });
		});
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let index = e.target.name;
		let value = e.target.value;
		setEditData({ ...editdata, [index]: value });
	}
	const editCaseNextDate = (nextdatemapidpk: number) => {
		if (editdata.casestatusfield == '' || editdata.casestatusfield == null) {
			errorcasestatusmsg = 'Case field is required';
			setErrorData({ ...errordata, 'errorcasestatusmsg': 'Case field is required' });
			error=1;
		}
		else
		{
			error=0;
		}

		if (editdata.casenextdatefield == '' || editdata.casenextdatefield == null) {
			errorcasenextdatemsg = 'Case Next Date field is required';
			setErrorData({ ...errordata, 'errorcasenextdatemsg': 'Case Next Date field is required' });
			error=1;
		}
		else
		{
			error=0
		}

		if(error==1)
		{
			setErrorData({ ...errordata, 'errorcasestatusmsg': errorcasestatusmsg, 'errorcasenextdatemsg': errorcasenextdatemsg });
		}
		else
		{
			caseserviceobj.addCase(nextdatemapidpk,editdata).then((resp)=>{
				if(resp.data[1]==1)
				{
					
					setErrorData({ ...errordata, successmsg: 'Case next date has been updated.' });
					props.setChildDatafunc();
					setEditFlag([0, 0]);
					
				}
				else{
					setErrorData({ ...errordata, successmsg: 'Case next date has been updated.' });
					setEditFlag([0, 0]);
				}
			});
		}
		
	}
	const cancelEdit = () => {
		setEditFlag([0, 0]);
	}
	const deleteCase = (nextdatemapidpk: number) => {
		caseswal.fire({
			html: <p>Are you sure to delete the case ?</p>,
			icon: 'info',
			showDenyButton: true,

			confirmButtonText: "Confirm",
			denyButtonText: `Cancel`
		}).then((result) => {
			if (result.isConfirmed) {
				caseserviceobj.deleteCase(nextdatemapidpk).then((resp) => {
					console.log(resp);
					if (resp.data[1] == 1) {
						// setChangeFlag(changeflag + 1);
						props.setChildDatafunc();
						caseswal.fire(`Deleted`);
					}
					else {
						caseswal.fire(`Not Deleted`);
					}
				});


			}
			else if (result.isDenied) {
				caseswal.fire(`Cancelled`);
			}
		});



	}
	return (
		<>
			<div className="card-body">
				<div className="row">
					<div className="col-md-12">
						<div className="table-responsive table-bordered table-hover ">
							<table className='table'>
								<thead>
									<tr>
										<th>Sl No</th>
										<th>Case Status</th>
										<th>Next Date</th>
										<th>Action</th>

									</tr>
								</thead>
								<tbody>
									{errordata.successmsg!='' ? <p>{errordata.successmsg}</p> : ''}
									{props.casenextdatelist.map((item, index) => (
										<tr key={item.case_map_next_date_map_id_pk}>
											<td>{index + 1}</td>
											<td>
												{editflag[0] == 1 && editflag[1] == item.case_map_next_date_map_id_pk ?
													(
														<span>
															<input type='text' className='form-control' name='casestatusfield' value={editdata.casestatusfield} onChange={(e) => { handleChange(e); }} placeholder='Case Status' />

															<p className='text-bold text-danger'>{errordata.errorcasestatusmsg}</p>

														</span>

													) : (<span >{item.case_status.toUpperCase()}</span>)}



											</td>

											{editflag[0] == 1 && editflag[1] == item.case_map_next_date_map_id_pk ?
												<td>
													{/* onChange={(e) => {    handleChange(e); }} */}
													{/* //onChange={() => {    handleChange(e); }} onClick={() => openDatepicker()}*/}
													<input type='text' className='form-control date' id='datepicker' name='casenextdatefield' value={editdata.casenextdatefield}
														placeholder='Next Case Date' readOnly />
													
													<p className='text-bold text-danger'>{errordata.errorcasestatusmsg}</p>
												</td>
												: <td><Datedisplay date={item.next_date} /> </td>}
											{editflag[0] == 1 && editflag[1] == item.case_map_next_date_map_id_pk ?
												(
													<td>
														<button className='btn btn-sm btn-primary' onClick={() => { editCaseNextDate(item.case_map_next_date_map_id_pk); }}>Submit</button>
														<span>&nbsp;&nbsp;&nbsp;</span>
														<button className='btn btn-sm btn-danger' onClick={() => cancelEdit()}>Cancel</button>
													</td>

												) :
												(<td>

													<button className='btn btn-sm btn-outline-success' onClick={() => { setEditFlag([editflag[0] + 1, item.case_map_next_date_map_id_pk]); }}><b>Edit</b></button><span>&nbsp;&nbsp;&nbsp;</span>

													<button className='btn btn-sm btn-outline-danger' onClick={() => { deleteCase(item.case_map_next_date_map_id_pk); }}><b>Delete</b></button>


												</td>)
											}
										</tr>


									))}




								</tbody>
							</table>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}
