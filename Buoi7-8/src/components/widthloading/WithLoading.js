import { Component, useState } from "react"
import './WithLoading.css';

const WithLoading = WrappedComponent => {

    class LoadingComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }

        handleShowLoading = (isLoading) => {
            this.setState({
                isLoading: isLoading
            })
        }

        render () {
            return(
                <div className='loading-container'>
                    {this.state.isLoading &&
                        <div className='loading-content'>
                            <img src='../../../images/loading1.gif'/>
                            <h4>Loading...</h4>
                        </div>
                    }
                    <WrappedComponent  showLoading={this.handleShowLoading} {...this.props}/>
                </div>
            )
        }

    }

    return LoadingComponent;

}

export default WithLoading;