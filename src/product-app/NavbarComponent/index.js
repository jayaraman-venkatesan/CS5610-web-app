import { NavLink } from 'react-router-dom';
import './index.css'
import teamLogo from '../../assets/team-52-logo.png'
import {useSelector} from "react-redux";

function NavbarComponent() {
    const {currentUser} = useSelector((state)=>state.user);
    const screens = [
        'contact',

    ]
    if (currentUser) {
        screens.push('account')
    } else {
        screens.push('login')
        screens.push('register')
    }
    return (
        <div className="top-nav">
            <div>
                <img src={teamLogo} className='team-logo' alt='Team Logo'></img>
            </div>
            <div>
                <li className="nav-item">
                {
                    screens.map((screen) => {

                                    return <NavLink to={`/${screen}`} className='nav-link'>{screen}</NavLink>
                                }

                    )
                }
                    <NavLink to="/" className='nav-link' activeClassName="nav-link.active">Home</NavLink>

                </li>
            </div>
        </div >
    );
}

export default NavbarComponent;