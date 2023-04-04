import { Link } from "react-router-dom";

const NotAvailable = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <p>The Page you are looking for does not exist</p>
            <Link to='/'>Back to Home...</Link>
        </div>
     );
}
 
export default NotAvailable;