import{Link} from 'react-router-dom';
import '../styles/notfound.css';

export default function Notfound(){
    return (
        <div className="not-found">
            <div className="text">
                    <h2>404</h2>
                    <div className="message">OOPS, couldn't find the page you're asking for</div>
                    <Link to='/'>Go back to the homepage</Link>
            </div>
        </div>
            );
}