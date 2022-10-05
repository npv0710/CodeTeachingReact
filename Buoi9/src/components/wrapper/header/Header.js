import './Header.css';
import { FiMenu } from 'react-icons/fi';
import store from '../../../redux/store';

import viewActions from '../../../redux/actions/viewActions';

import { connect } from 'react-redux';

const Header = (props) => {

    // console.log('props of the header component:')
    
    // console.log(props);

    const handleClickMenuIcon = () => {
        //props.toggleSidebar();

        // store.dispatch({
        //     type: 'TOGGLE_SIDEBAR',
        //     payload: null
        // })
        props.toggleSidebar();
    }
    
    //console.log('State received form store: ' + store.getState().view.sidebarIsOpen);

    return (
        <div className="header">
            <FiMenu 
                style={{cursor: 'pointer', marginLeft: '1.5rem'}} size={20}
                onClick={handleClickMenuIcon}
            />
            {/* <h2>{store.getState().counter.count}</h2> */}
            <h2>{props.count}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleSidebar: () => {
            dispatch(viewActions.toggleSidebar())
        }
    }
}
//export default connect(null, mapDispatchToProps)(Header);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
