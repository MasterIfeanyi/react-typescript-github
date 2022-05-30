import React from 'react'
import {DataType} from "../types/Data"



type ContentProps = {
    data: DataType
}

const Content = ({data}: ContentProps) => {
  return (
    <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 my-3">
                <div className="cardStyle">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-3 mx-auto">
                            <img src={data.avatar_url} alt={data.login} className="person-img" />
                        </div>
                        {/* <div className="col-12 d-flex px-3 my-2">
                            <div className="input-group input-group-lg mb-3">
                                <label
                                    htmlFor=""
                                    className="input-group-text"
                                >
                                    Name
                                  </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={data.name}
                                />
                            </div>
                        </div> */}
                        <div className="col-12 form-group d-flex flex-wrap align-items-center">
                            <label htmlFor="" className="form-label h5 me-2">Name:</label>
                            <p className="h4">{data.name}</p>
                        </div>
                        <div className="col-12 form-group d-flex flex-wrap align-items-center">
                            <label htmlFor="" className="form-label h5 me-2">Followers:</label>
                            <p className="h4">{data.followers}</p>
                        </div>
                        <div className="form-group col-12 d-flex flex-wrap align-items-center">
                            <label htmlFor="" className="form-label h5 me-2">Repos:</label>
                            <p className="h4">{data.public_repos}</p>
                        </div>
                        <div className="form-group col-12 d-flex flex-wrap align-items-center">
                            <label htmlFor="" className="form-label h5 me-2">Username:</label>
                            <p className="h4">{data.login}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content