import { Route, Switch } from "react-router-dom";
import ParentManageState from "../../../sharedata/ParentManageState";
import Table from "../../fragment/Table";
import DemoLifeCycle from "../../lifecycle/DemoLifeCycle";
import ListGroups from "../../listgroups/ListGroups";
import UserInfo from "../../userinfo/UserInfo";

import styled from "styled-components";

import OnMouseHover from '../../renderprops/OnMouseHover';
import Counter from "../../renderprops/Counter";
import WithColor from "../../HOC/WithColor";


const Logo = (props) => {
    return (
        <img src="logo192.png" style={{position: 'absolute', left: props.mouse.x, top: props.mouse.y}}/>
    )
}

const Title = (props) => {
    return (
        <div>
            <h1>Random Color</h1>
            <h2>{props.subTitle}</h2>
            <h3>{props.number}</h3>
        </div>
    )
}

const Article = (props) => {
    return (
        <div>
            <h1>Article</h1>
            <h2>{props.articleTitle}</h2>
        </div>
    )
}

const TitleWithRandomColor = WithColor(Title);
const ArticleWithRandomColor = WithColor(Article);

const Main = (props) => {
    return (
        <div className={props.className  + " main"}>
            {/* <Table />
            <h1>Buoi 5</h1>
            <ParentManageState />
            <hr></hr>
            <br></br>
            <br></br>
            <h1>Buoi 6</h1>
            <DemoLifeCycle /> */}
            <Switch>
                <Route path="/user-info" component={UserInfo}/>
                <Route path="/list-groups" component={ListGroups}/>
            </Switch>
            {/* HOC */}
            <TitleWithRandomColor subTitle="123abc"/>
            <ArticleWithRandomColor />
            
            <h1>Render props:</h1>
            {/* <OnMouseHover 
                render={({x, y}) => {
                    let mouse = {x, y};
                    return(
                        <div>
                            <h3>The mouse's current position: {x} ;{y}</h3>
                            <Logo mouse = {mouse} />
                        </div>
                    )
                }}
            /> */}
            <div className="counter">
                <div className="left">
                    <Counter 
                        render={dataObject => {
                            const { count, increment, decrement } = dataObject
                            return (
                                <div>
                                    <p>Count current: {count}</p>
                                    <button onClick={increment}>Increment</button>
                                    <button onClick={decrement}>Decrement</button>
                                </div>
                            )
                        }}
                    />
                </div>

                <div div className="right">
                    <Counter 
                        render={dataObject => {
                            const { count, increment, decrement } = dataObject
                            return (
                                <div>
                                    <p>Count current: {count}</p>
                                    <button onClick={increment}>Increment</button>
                                    <button onClick={decrement}>Decrement</button>
                                </div>
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const WithStyledMain = styled(Main) `
    width: 100%;
    height: 100%;

    .counter {
        display: flex;
        justify-content: space-around;
    }
`


export default WithStyledMain;

