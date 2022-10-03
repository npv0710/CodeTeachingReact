import WithLoading from "../widthloading/WithLoading";
import './ListGroups.css';

const ListGroups = (props) => {
    return (
        <div className="list-groups">
            <h1>ListGroups component</h1>
        </div>
    )
}

export default WithLoading(ListGroups);

