import MessageContext from "../../context/MessageContext";

const Footer = (props) => {
    return (
        <div className="footer">
            <MessageContext.Consumer>
                {
                    message => <h1>{message}</h1>
                }
            </MessageContext.Consumer>
        </div>
    )
}
export default Footer;
