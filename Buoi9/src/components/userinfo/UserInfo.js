import './UserInfo.css';

import WithLoading from '../widthloading/WithLoading';

const UserInfo = (props) => {
    console.log(props);

    return (
        <div className='user-container'>
            <h1>User info component</h1>
        </div>
    )
}

export default WithLoading(UserInfo);