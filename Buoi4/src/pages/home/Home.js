import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";

const Home = (props) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
    const _toggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    }
    return (
        <div className="home">
            <Sidebar sidebarIsOpen={sidebarIsOpen}/>
            <Wrapper 
                toggleSidebar={_toggleSidebar}
                sidebarIsOpen={sidebarIsOpen}
            />
        </div>
    )
}

export default Home;