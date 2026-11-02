import Sidebar from "./components/sidebar";
import { IoIosWarning } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";



export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col lg:flex-1 items-start justify-start font-sans">
      {/* sidebar */}
      <Sidebar />

      {/* dashboard component */}
      <section className="w-full min-h-screen border border-red-500">
        {/* overview component and add pantry item button */}
        <div className="flex lg:flex-row flex-col justify-between items-center lg:p-3 p-4 ">
          <div className="flex flex-col justify-start items-start gap-2.5 text-ink lg:mb-0 mb-6">
            <p className="font-medium text-md text-gray-500">OVERVIEW</p> 
            <h1 className="font-bold lg:text-5xl text-3xl">Your household at a glance</h1>
            <p className="font-medium text-lg text-gray-500">A little planning. A well-stocked home.</p>
          </div>

          <button className="flex flex-row lg:justify-evenly justify-center items-center gap-2.5 lg:w-46 w-75 p-3 bg-brand-strong rounded-xl hover:bg-muted hover:shadow-md hover:shadow-warning cursor-pointer text-canvas  hover:text-canvas"> <FaPlus /> Add Pantry Item</button>
        </div>

        {/* Analytics three cards */}
        <section className="w-full flex lg:flex-row flex-col lg:gap-0 gap-5 justify-evenly items-center mt-3.5 h-32">
          <div className="w-83 flex flex-row justify-start items-start gap-5 bg-white h-full border border-border rounded-2xl p-4">
            <IoIosWarning size={50} color="#f59e0b" />
            <div className="flex flex-col justify-start items-start gap-3 "> 
              <p className="font-medium">Low or out of stock</p>
              <span className="font-bold text-4xl ">1</span>
            </div>
          </div>

          <div className="w-83 flex flex-row justify-start items-start gap-5 bg-white h-full border border-border rounded-2xl p-4">
            <CiCalendarDate size={50} color="#276443" />
            <div className="flex flex-col justify-start items-start gap-3 "> 
              <p className="font-medium">Upcoming dates</p>
              <span className="font-bold text-4xl ">2</span>
            </div>
          </div>

          <div className="w-83 flex flex-row justify-start items-start gap-5 bg-white h-full border border-border rounded-2xl p-4">
            <IoCartOutline size={50} color="#854d0e" />
            <div className="flex flex-col justify-start items-start gap-3 "> 
              <p className="font-medium">Still to buy</p>
              <span className="font-bold text-4xl ">3</span>
            </div>
          </div>
        </section>



      </section>

    </div>
  );
}
