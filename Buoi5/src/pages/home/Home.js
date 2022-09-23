import PrManageState from "../../sharedata/PrManageState"
import DemoClassComponent from "../../_sharecomponents/DemoClassComponent"

const Home = (props) => {
    return (
        <div className="home">
            <h1>Share data between child components</h1>
            {/* <DemoClassComponent /> */}
            <PrManageState />
        </div>
    )
}

export default Home