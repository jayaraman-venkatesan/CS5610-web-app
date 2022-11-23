
import "./index.css";
import { Link } from "react-router-dom";

const OwnerRequests = ({request}) => {
    console.log(request)
    return(
                <tr>
                    <td className="wd-request-element">{request.reqId}</td>
                    <td className="wd-request-element">{request.propertyName}</td>
                    <td className="wd-request-element">{request.datePosted}</td>
                    {
                        request.status==="P" ?  (<td className="wd-request-element wd-col-orange">
                                                    Pending
                                                 </td>) : (<td className="wd-request-element wd-col-green">
                                                    Approved
                                                </td>)
                    }   

                    <td className="actions">
                        <Link to={`/property/${request.propertyID}`} type="button" class="btn btn-dark">Preview</Link>
                    </td>
                </tr>
    );
}

export default OwnerRequests;