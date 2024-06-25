import {Outlet, Link} from "react-router-dom";
const Layout = () =>{
    return(
<>
<div className="flex justify-between pl-32 pr-32 pt-12">
        <h1 className='text-3xl font-bold'>LOGO</h1>
        <ul className="flex justify-between w-64">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='text-3xl font-bold'>Login</div>
      </div>
<Outlet />
</>


    )
};
export default Layout;

