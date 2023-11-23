import { Link } from "react-router-dom"
const Header = () => {
    return <>
        <Link to="/">Home </Link><br />
        <Link to="/SingIn">Singin</Link><br />
        <Link to="/LogIn">Login</Link><br />
        <Link to="/About">About</Link><br/>
        <Link to="/Users">Users</Link>
    </>
}
export default Header