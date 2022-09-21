import Signin from '../../form/Signin';
import Table from '../../fragment/Table';
import './Main.css';

const Main = (props) => {
    return(
        <div className="main">
            <h1>Main content</h1>
            <Table />
            <Signin title="Signin"/>
        </div>
    )
}

export default Main;