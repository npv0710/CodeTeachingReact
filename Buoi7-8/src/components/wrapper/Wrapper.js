import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import './Wrapper.css';

const Wrapper = (props) => {

    //console.log(props);

    return (
        <div className={props.sidebarIsOpen ? "wrapper" : "wrapper sidebar-close"}>
            <Header 
                toggleSidebar={props.toggleSidebar}
            />
            <Main />
            <Footer />
        </div>
    )
}

export default Wrapper;