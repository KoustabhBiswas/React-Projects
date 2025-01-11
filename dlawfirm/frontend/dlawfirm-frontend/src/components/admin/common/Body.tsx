import React from 'react'

export const Body = () => {
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
                            <div className="card card-round">
                                <div className="card-header">
                                    <div className="card-head-row card-tools-still-right">
                                        <h4 className="card-title">Users Geolocation</h4>
                                        <div className="card-tools">
                                            <button className="btn btn-icon btn-link btn-primary btn-xs">
                                                <span className="fa fa-angle-down" />
                                            </button>
                                            <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                                                <span className="fa fa-sync-alt" />
                                            </button>
                                            <button className="btn btn-icon btn-link btn-primary btn-xs">
                                                <span className="fa fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="card-category">
                                        Map of the distribution of users around the world
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="table-responsive table-hover table-sales">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img
                                                                        src="public/template/img/flags/id.png"
                                                                        alt="indonesia"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>Indonesia</td>
                                                            <td className="text-end">2.320</td>
                                                            <td className="text-end">42.18%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img
                                                                        src="public/template/img/flags/us.png"
                                                                        alt="united states"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>USA</td>
                                                            <td className="text-end">240</td>
                                                            <td className="text-end">4.36%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img
                                                                        src="public/template/img/flags/au.png"
                                                                        alt="australia"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>Australia</td>
                                                            <td className="text-end">119</td>
                                                            <td className="text-end">2.16%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img
                                                                        src="public/template/img/flags/ru.png"
                                                                        alt="russia"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>Russia</td>
                                                            <td className="text-end">1.081</td>
                                                            <td className="text-end">19.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img
                                                                        src="public/template/img/flags/cn.png"
                                                                        alt="china"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>China</td>
                                                            <td className="text-end">1.100</td>
                                                            <td className="text-end">20%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img
                                                                        src="public/template/img/flags/br.png"
                                                                        alt="brazil"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>Brasil</td>
                                                            <td className="text-end">640</td>
                                                            <td className="text-end">11.63%</td>
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
        </>
    )
}
