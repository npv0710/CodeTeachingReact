import './Header.css';
import { FiMenu } from 'react-icons/fi';
const Header = (props) => {
    const handleClickMenuIcon = (e) => {
        props.toggleSidebar();
    }
    return (
        <div className='header'>
            <div className='nav-bar'>
                <div className='left-content'>
                    <FiMenu size={20} style={{cursor: 'pointer'}} onClick={handleClickMenuIcon}/>
                </div>
                <div className='right-content'>
                    
                </div>
            </div>
            <div className='current-path'>

            </div>
        </div>
    )
}

export default Header;