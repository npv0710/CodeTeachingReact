import PrManageState from "../../sharedata/PrManageState"
import DemoClassComponent from "../../_sharecomponents/DemoClassComponent"
import DemoLifeCycle from "../../_sharecomponents/demolifecycle/DemoLifeCycle"

const Home = (props) => {
    return (
        <div className="home">
            <h1>Share data between child components</h1>
            {/* <DemoClassComponent /> */}
            <PrManageState />

            <DemoLifeCycle message="Demo Life Cycle"/>
        </div>
    )
}

export default Home