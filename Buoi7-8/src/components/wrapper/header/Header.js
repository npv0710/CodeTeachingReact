import './Header.css';
import { FiMenu } from 'react-icons/fi';

const Header = (props) => {

    // console.log('props of the header component:')
    
    // console.log(props);

    const handleClickMenuIcon = () => {
        props.toggleSidebar();
    }
    
    return (
        <div className="header">
            <FiMenu 
                style={{cursor: 'pointer', marginLeft: '1.5rem'}} size={20}
                onClick={handleClickMenuIcon}
            />  
        </div>
    )
}
export default Header;
