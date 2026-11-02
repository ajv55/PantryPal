import Sidebar from "./components/sidebar";
import { IoIosWarning } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { LuMilk } from "react-icons/lu";
import { LuBeef } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";



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

        {/* Summary Cards */}
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

        {/* Need attention component */}
        <section className="w-full flex flex-row h-100 lg:mt-1.5">

          <div className="w-1/2 h-full flex flex-col gap-4 p-3">

          <div className="bg-white flex flex-col border border-border h-40 rounded-xl">
            <div className="flex flex-row justify-between items-center p-3">
              <h4 className="text-2xl font-bold">Needs attention</h4>
              <a href="#"><FaChevronRight size={20} /></a>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 justify-center items-center p-2">
                <LuMilk size={40} />
                <div>
                  <h6 className="font-semibold">Milk</h6>
                  <p className="font-light">0.5 l remaining</p>
                </div>
              </div>

              <div className="p-3 flex flex-col justify-center items-center gap-3">
                <div className="w-35 h-8 bg-amber-200 rounded-3xl flex justify-center items-center text-md text-center"><p className="text-amber-500 font-bold">Low stock</p></div>
                <p className="font-light text-sm">Threshold: 0.5 l</p>
              </div>
            </div>
          </div>

          {/* use soon card */}
          <section className="bg-white border rounded-2xl border-border h-50">
            <div className="flex flex-row justify-between items-center p-3">
              <h4 className="text-2xl font-bold">Use soon</h4>
              <a href="#"><FaChevronRight size={20} /></a>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="grid w-full grid-cols-[minmax(0,1fr)_4rem_4rem] items-center gap-3 border-b border-border p-4">
                <div className="flex items-center gap-3">
                  <LuMilk size={30} />
                  <p className="font-semibold text-md">Milk</p>
                </div>
                <p className="text-right tabular-nums">0.5 l</p>
                <p className="text-right">Nov 5</p>
              </div>

              <div className="grid w-full grid-cols-[minmax(0,1fr)_4rem_4rem] items-center gap-3 p-4">
                <div className="flex items-center gap-3">
                  <LuBeef size={30} />
                  <p className="font-semibold text-md">Ground beef</p>
                </div>
                <p className="text-right tabular-nums">1 lb</p>
                <p className="text-right">Nov 6</p>
              </div>

            </div>

          </section>

          </div>

          {/* shopping list card */}
          <div className="w-1/2 h-full  p-3">
          <div className="bg-white flex flex-col justify-between w-full h-full border border-border rounded-2xl">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center p-3">
                <h4 className="text-2xl font-bold">Shopping list</h4>
                <p className="font-light text-sm">3 remaining</p>
              </div>

              <div className="flex justify-between items-center border-b border-border p-3">
              <div className="flex flex-row items-center gap-3">
                <input type="checkbox" id='water' name='water' value='yes' />
                <label htmlFor="water">Water</label>
              </div>
              <p className="font-light text-sm">1 pack - 24 bottles</p>
            </div>

            <div className="flex justify-between items-center border-b border-border p-3">
              <div className="flex flex-row items-center gap-3">
                <input type="checkbox" id='milk' name='milk' value='yes' />
                <label htmlFor="milk">Milk</label>
              </div>
              <p className="font-light text-sm">0.5 l</p>
            </div>

            <div className="flex justify-between items-center border-b border-border p-3">
              <div className="flex flex-row items-center gap-3">
                <input type="checkbox" id='beef' name='beef' value='yes' />
                <label htmlFor="beef">Ground Beef</label>
              </div>
              <p className="font-light text-sm">1 lb</p>
            </div>

            </div>

            

            <div className="flex flex-row justify-start items-center p-3 gap-2.5">
              <p className="text-xl font-semibold text-brand">View shopping list</p>
              <a href="#"><FaArrowRightLong size={17} color="#1d4d33"/></a>
            </div>
          </div>
          </div>
        </section>

        {/* pantry snapshot card */}
        <section className="w-full h-70 p-3">
          <div className="w-full h-full bg-white rounded-2xl border border-border">

          </div>
        </section>

      </section>

    </div>
  );
}
