//import './Sidebar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuLinks } from '../../data/data';
import CustomLinks from '../customlinks/CustomLinks';

const SidebarContainer = styled.div `
    width: 16rem;
    height: 100vh;
    background-color: #3c4b64;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translate(${p => p.sidebarIsOpen ? 0 : '-16rem'}, 0);
    transition: transform ease-in-out .3s;

    a {
        display: block;
        text-decoration: none;
        color: #fff;
        padding: 10px 0;
    }

    a:hover {
        color: orange;
    }
`
const Sidebar = (props) => {
    return(
        <SidebarContainer 
            className='sidebar' 
            sidebarIsOpen={props.sidebarIsOpen}
        >
            {/* <h1>{props.sidebarIsOpen.toString()}</h1>
            <p>Sidebar</p> */}
            <Link to='/user-info'>
                User Info
            </Link>
            <Link to='/list-groups'>
                List Groups
            </Link>
            <CustomLinks menuLinks={ menuLinks }/>
        </SidebarContainer>
    )
}

export default Sidebar;