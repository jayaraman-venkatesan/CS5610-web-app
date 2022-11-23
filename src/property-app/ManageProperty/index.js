import './index.css';
import React from 'react';
import NavbarComponent from "../NavbarComponent";
import AddProperty from './AddProperty';
import OwnerRequests from './OwnerRequests';
import requestHistory from './owner-propery.json';
import SearchComponent from '../HomeScreen/SearchComponent';
import { useState } from 'react';

const ManagePropertyScreen = () => {

    const [filter,setFilter] = useState('');
    const [addProperty,setAddProperty] = useState(false);

    return(
        <>
            <div className="wd-manage-prop-navbar-comp">
                <NavbarComponent />
            </div>
            <div className="wd-search-comp">
                <SearchComponent placeHolder="Search for Requests.." onSearch={(res)=>{setFilter(res)}} />
            </div>
            <div className='wd-add-property-container'>
                {
                    !addProperty && <div className='wd-add-property-btn'>
                                        <button type="button" className="btn btn-success" onClick={()=>setAddProperty(true)}>+ Add property</button>
                                    </div>
                }
                {
                    addProperty && <div className='wd-add-property-section'>
                                        <AddProperty showButton={() => setAddProperty(false)}/>
                                    </div>
                }
            </div>
            <div className="wd-manage-property-req-container">
                <table className="layout display responsive-table">
                    <thead>
                        <tr>
                            <th>Request Number</th>
                            <th>Property Name</th>
                            <th>Date posted</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestHistory.filter(p => p.reqId.includes(filter)||filter==='').length===0?<h3>sorry no request history found, FELL FREE TO ADD A PROPERTY !!</h3> :
                            requestHistory.filter(p => p.reqId.includes(filter)||filter==='').map(request=> <OwnerRequests key={request.reqId} request={request}></OwnerRequests>)
                        }
                    </tbody>  
                </table>
            </div>
            
        </>
    );

}

export default ManagePropertyScreen;