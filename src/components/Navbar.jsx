import { styles } from '../styles';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    
    const navLink = <>
    <li className="text-lg font-semibold"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#915] underline" : "text-white" }>Home</NavLink></li>
    <li className="text-lg font-semibold"><NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#915] underline" : "text-white" }>About</NavLink></li>
    <li className="text-lg font-semibold"><NavLink to="/project" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#915] underline" : "text-white" }>Projects</NavLink></li>
    <li className="text-lg font-semibold"><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#915] underline" : "text-white" }>Contact</NavLink></li>
    </>
    
    return (
      <nav className={`${styles.paddingX} w-full py-2 fixed top-0 z-20 bg-transparent`}>
         <div className="navbar flex justify-center shadow-lg">
           <div className="navbar-start">
                 <div className="flex md:ml-2 font-serif">
                      <span className="lg:text-2xl font-bold mr-1 text-white lg:mr-0">Rime|</span><span className="text-amber-600 sm:text-sm md:mt-1 lg:mt-2 font-bold">React Developer</span>
                   </div>
           </div>
           <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal px-1">
             {
               navLink
             }
             </ul>
           </div>
           <div className="navbar-end lg:hidden">   
           <div className="dropdown lg:hidden">
               <label tabIndex={0} className="btn btn-ghost text-white btn-circle">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-black rounded-box w-52">
                 {
                   navLink
                 }
               </ul>
               </div>  
       </div>
   </div>
      </nav>
   );
};

export default Navbar;