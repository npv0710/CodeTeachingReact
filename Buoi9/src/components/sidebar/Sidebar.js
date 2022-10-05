//import './Sidebar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuLinks } from '../../data/data';
import CustomLinks from '../customlinks/CustomLinks';
// import store from '../../redux/store';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import countActions from '../../redux/actions/countActions';

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
    console.log(props);

    // console.log('State received form store: ');

    // console.log(store.getState().view.sidebarIsOpen);

    // const [sidebarIsOpen, setSidebarIsOpen] = useState(store.getState().view.sidebarIsOpen);

    // useEffect(() => {
    //     store.subscribe(() => {
    //         setSidebarIsOpen(store.getState().view.sidebarIsOpen);
    //     })
    // }, [])

    return(
        <SidebarContainer 
            className='sidebar' 
            //sidebarIsOpen={props.sidebarIsOpen}
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
            <button 
                onClick={() => {
                    // store.dispatch({
                    //     type: 'INCREMENT_COUNT',
                    //     payload: null
                    // })
                    props.increaseCount();
                }}
            >
                Increment Count
            </button>
            <button 
                onClick={() => {
                    props.decreaseCount();
                }}
            >
                Decrement Count
            </button>
        </SidebarContainer>
    )
}

const mapStateToProps = state => {
    return {
        sidebarIsOpen: state.view.sidebarIsOpen,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        increaseCount: () => {
            dispatch(countActions.increaseCount());
        },
        decreaseCount: () => {
            dispatch(countActions.decreaseCount());
        },
    }
}
//export default connect(mapStateToProps, null)(Sidebar);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);