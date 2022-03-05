import { Link } from 'react-router-dom';
import './Header.css'
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <header>
            <div className='header-icon-con'>
                <Link to={ "/" }>
                    Ico here bebi
                </Link>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;