import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import '../styles/footer.css';

export default function Footer(){
    return(
        <footer>
            <div className="about">
                <h2>About us</h2>
                <p>Fiona store always satisfies the increasing <br />requirements of our customers</p>
                <div className="more-info">
                    <p className="info"><LocationOnOutlinedIcon fontSize='small'/>11101010 Wall Street, Washington D.C.</p>
                    <p className="info"><EmailOutlinedIcon fontSize='small'/>hello@example.co</p>
                    <p className="info"><CallOutlinedIcon fontSize='small'/>(+39)1234 567890</p>
                </div>
            </div>
            <div className="information">
                <h2>informations</h2>
                <p>About Us</p>
                <p>affiliate</p>
                <p>careers</p>
                <p>contact us</p>
                <p>responsability</p>
            </div>
            <div className="care">
                <h2>customer care</h2>
                <p>returns</p>
                <p>shipping</p>
                <p>FAQ</p>
                <p>size guide</p>
                <p>track orders</p>
            </div>
            <div className="newsletter">
                <h2>newsletter</h2>
                <p>Subscribe to get daily news & more</p>
                <input type="mail"placeholder='Email address...' />
                <p>Don't worry we don't spam ;)</p>
            </div>
        </footer>
    );
}