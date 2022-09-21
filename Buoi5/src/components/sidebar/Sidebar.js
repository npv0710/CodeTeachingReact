import styled from "styled-components";
import Signin from "../form/Signin"
import { BsSpeedometer2 } from 'react-icons/bs';

const SidebarContainer = styled.div `
    width: 16rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #3c4b64;
    transform: translate(${p => p.sidebarIsOpen? 0 : '-16rem'}, 0);
    transition: transform ease-in-out .3s;

    .sidebar-brand {
        background-color: #303C54;
        height: 4rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sidebar-brand img {
        width: 24px;
        height: 24px;
        margin-right: .3rem;

        animation: logo-spin infinite 15s linear;
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .sidebar-brand p {
        ${'' /* font-weight: bold; */}
        font-size: 1.2rem;
    }

    .sidebar-brand span {
        color: #76BEEA;
        font-weight: normal;
        font-size: .85rem;
        letter-spacing: .08rem;
    }


    .dashboard {
        background-color: #46546C;
        color: white;
        height: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .dashboard p {
        margin-left: -1.5rem;
        
    }

    .dashboard span {
        background-color: #3399FF;
        padding: 1px 6px;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: .8rem;
        margin-right: -.5rem;
    }
`


const Sidebar = (props) => {
    console.log(props)
    return (
        <SidebarContainer sidebarIsOpen={props.sidebarIsOpen}>
            <div className="sidebar-brand">
                <img src="logo192.png"/>
                <p>ROCKET24 <span>REACT.JS</span></p>
            </div>
            <div className="dashboard">
                <BsSpeedometer2 size={20}/>
                <p>Dashboard</p>
                <span>New</span>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar;