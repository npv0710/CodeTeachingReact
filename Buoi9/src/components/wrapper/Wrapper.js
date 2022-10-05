import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import './Wrapper.css';
//import store from "../../redux/store";

import { useState, useEffect } from "react";

import { connect } from "react-redux";
const Wrapper = (props) => {

    //console.log(props);
    // const [sidebarIsOpen, setSidebarIsOpen] = useState(store.getState().view.sidebarIsOpen);

    // useEffect(() => {
    //     store.subscribe(() => {
    //         setSidebarIsOpen(store.getState().view.sidebarIsOpen);
    //     })
    // }, [])

    return (
        <div className={props.sidebarIsOpen ? "wrapper" : "wrapper sidebar-close"}>
            <Header 
                //toggleSidebar={props.toggleSidebar}
            />
            <Main />
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sidebarIsOpen: state.view.sidebarIsOpen,
    }
}

export default connect(mapStateToProps, null)(Wrapper);