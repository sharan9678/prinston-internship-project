import "./mailList.css";

const MailList = () => {
    return (
        <div className="mailList">
            <h1 className="mailTitle">Save time, Save Money</h1>
            <span className="mailDesc">Sign up, we'll send the best deal to you!</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Enter your mail"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
};

export default MailList;