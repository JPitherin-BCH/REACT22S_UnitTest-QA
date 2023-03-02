import { Link } from "react-router-dom";

const Home = () => {
 return(
    <div>
        <Link to="/Calculator"><button className="button">Calculator</button></Link>
        <Link to="/Dice"><button className="button">Dice</button></Link>
    </div>
 )
};

export default Home;