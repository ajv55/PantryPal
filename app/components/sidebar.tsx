import { FaLeaf } from "react-icons/fa";
import { FaHouseCrack } from "react-icons/fa6";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

export default function Sidebar() {
    return (
        <header className="lg:w-80 w-fit lg:min-h-screen h-40 lg:flex lg:flex-col flex-col justify-between items-center p-3 lg:border-r border-b border-border ">
                <div className="lg:w-full text-ink flex lg:flex-col flex-col gap-1 justify-start items-start">
                  <div className="flex justify-start items-center text-3xl gap-1.5 text-brand-strong">
                    <span><FaLeaf /> </span>
                    <span className="text-3xl font-bold text-center">PantryPal</span> 
                  </div>
                  <h6 className="font-light text-sm">Know what you have. Buy what you need.</h6>
        
                  <nav className="flex lg:flex-col flex-row text-ink md:justify-start lg:mt-6 mt-9 gap-6 justify-evenly text-lg w-full h-auto items-start ">
                    <a href="#" className="hover:bg-muted hover:text-canvas hover:shadow-md hover:shadow-warning p-2 rounded flex flex-row justify-center items-center gap-2.5"><span><FaHouseCrack /></span> Overview</a>
                    <a href="#" className="hover:bg-muted hover:text-canvas hover:shadow-md hover:shadow-warning  p-2 rounded flex flex-row justify-center items-center gap-2.5"><span><MdOutlineFoodBank /></span> Pantry</a>
                    <a href="#" className="hover:bg-muted hover:text-canvas hover:shadow-md hover:shadow-warning  p-2 rounded flex flex-row justify-center items-center gap-2.5"><span><GiShoppingCart /></span> Shopping</a>
                  </nav>
                </div>
                
        
                 <div id='sidebar-footer' className="lg:flex lg:lex-row justify-start items-center gap-2 text-gray-400 text-sm font-light hidden">
                  <FaLeaf />
                  <p>Stored in this browser</p>
                </div>
              </header>
    )
}