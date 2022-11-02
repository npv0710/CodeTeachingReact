import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import './Wrapper.css';

import MessageContext from "../context/MessageContext";

const Wrapper = (props) => {

    //console.log(props);

    const message = 'Hello child component';
    
    return (
        <div className={props.sidebarIsOpen ? "wrapper" : "wrapper sidebar-close"}>
            <MessageContext.Provider value={message}>
                <Header 
                    toggleSidebar={props.toggleSidebar}
                />
                <Main />
                <Footer />
            </MessageContext.Provider>
        </div>
    )
}

export default Wrapper;