
const Header = () => {
    return ( 
        <div className="Header">
            <h1>Hello, I am  Header </h1>
            <div className="logout">
                <a href="/">Logout</a>
            </div>
            <div className="navigators">
                <a href="/list of courses">List of Courses</a>
                <a href="/view responses">View Responses</a>
                <a href="/allotment">Allotment</a>
            </div>
            
            
        </div>
    );
}
    
export default Header;
