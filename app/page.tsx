import Sidebar from "./components/sidebar";
import { IoIosWarning } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { LuBeef } from "react-icons/lu";
import { FaBottleWater } from "react-icons/fa6";
import Footer from "./components/footer";


export default function Home() {

  return (
    <div className="min-h-dvh w-full bg-canvas text-ink font-sans lg:grid lg:grid-cols-[14rem_minmax(0,1fr)]">
      {/* sidebar */}
      <Sidebar />

      {/* dashboard component */}
      <main id="overview" className="min-w-0 space-y-5 p-4 sm:p-6 lg:p-8">
        {/* overview component and add pantry item button */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-col justify-start items-start gap-2.5 text-ink ">
            <p className="font-medium text-sm text-muted">OVERVIEW</p> 
            <h1 className="text-3xl font-bold tracking-tight xl:text-5xl">Your household at a glance.</h1>
            <p className="font-medium text-lg text-muted">A little planning. A well-stocked home.</p>
          </div>

          <button type="button" disabled className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-white disabled:opacity-70 sm:w-auto">
            <FaPlus aria-hidden="true" /> Add pantry item
          </button>
        </div>

        {/* Summary Cards */}
        <section className="grid gap-3 sm:grid-cols-3">
          <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-surface p-4">
            <IoIosWarning aria-hidden="true" size={28} className="shrink-0" color="#f59e0b" />
            <div className="flex flex-col justify-start items-start gap-3 "> 
              <p className="font-medium">Low or out of stock</p>
              <span className="font-bold text-4xl ">1</span>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-surface p-4">
            <CiCalendarDate aria-hidden="true" size={28} className="shrink-0" color="#276443" />
            <div className="flex flex-col justify-start items-start gap-3 "> 
              <p className="font-medium">Upcoming dates</p>
              <span className="font-bold text-4xl ">2</span>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-surface p-4">
            <IoCartOutline aria-hidden="true" size={28} className="shrink-0" color="#854d0e" />
            <div className="flex flex-col justify-start items-start gap-3 "> 
              <p className="font-medium">Still to buy</p>
              <span className="font-bold text-4xl ">3</span>
            </div>
          </div>
        </section>

        {/* Need attention component */}
        <section className="grid gap-4 xl:grid-cols-2">

          <div className="min-w-0 space-y-4">

          <div className="rounded-2xl border border-border bg-surface">
            <div className="flex flex-row justify-between items-center p-3">
              <h2 className="text-2xl font-bold">Needs attention</h2>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-2">
              <div className="flex flex-row gap-4 justify-center items-center p-2">
                <LuMilk size={40} className="shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Milk</p>
                  <p className="font-light">0.5 l remaining</p>
                </div>
              </div>

              <div className="p-3 flex flex-col justify-center items-center gap-3">
                <div className="rounded-full bg-warning-soft px-3 py-1 text-sm"><p className="font-semibold text-warning">Low stock</p></div>
                <p className="font-light text-sm">Threshold: 0.5 l</p>
              </div>
            </div>
          </div>

          {/* use soon card */}
          <section className="rounded-2xl border border-border bg-surface">
            <div className="flex flex-row justify-between items-center p-3">
              <h2 className="text-2xl font-bold">Use soon</h2>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="grid w-full grid-cols-[minmax(0,1fr)_3rem_3rem] items-center gap-2 border-b border-border p-3">
                <div className="flex items-center gap-3">
                  <LuMilk size={30} className="shrink-0" aria-hidden="true" />
                  <p className="font-semibold text-sm">Milk</p>
                </div>
                <p className="text-right tabular-nums">0.5 l</p>
                <p className="text-right">Nov 5</p>
              </div>

              <div className="grid w-full grid-cols-[minmax(0,1fr)_3rem_3rem] items-center gap-2 p-3">
                <div className="flex items-center gap-3">
                  <LuBeef size={30} className="shrink-0" aria-hidden="true" />
                  <p className="font-semibold text-sm">Ground beef</p>
                </div>
                <p className="text-right tabular-nums">1 lb</p>
                <p className="text-right">Nov 6</p>
              </div>

            </div>

          </section>

          </div>

          {/* shopping list card */}
          <div id="shopping" className="min-w-0">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center p-3">
                <h2 className="text-2xl font-bold">Shopping list</h2>
                <p className="font-light text-sm">3 remaining</p>
              </div>

              <div className="flex justify-between items-center border-b border-border p-3">
              <div className="flex flex-row items-center gap-3">
                <input type="checkbox" disabled className="size-4 accent-brand" id='water' name='water' value='yes' />
                <label htmlFor="water">Water</label>
              </div>
              <p className="font-light text-sm">1 pack - 24 bottles</p>
            </div>

            <div className="flex justify-between items-center border-b border-border p-3">
              <div className="flex flex-row items-center gap-3">
                <input type="checkbox" disabled className="size-4 accent-brand" id='milk' name='milk' value='yes' />
                <label htmlFor="milk">Milk</label>
              </div>
              <p className="font-light text-sm">0.5 l</p>
            </div>

            <div className="flex justify-between items-center border-b border-border p-3">
              <div className="flex flex-row items-center gap-3">
                <input type="checkbox" disabled className="size-4 accent-brand" id='beef' name='beef' value='yes' />
                <label htmlFor="beef">Ground Beef</label>
              </div>
              <p className="font-light text-sm">1 lb</p>
            </div>

            </div>

            

          </div>
          </div>
        </section>

        {/* pantry snapshot card */}
        <section id="pantry" className="min-w-0">
          <div className="rounded-2xl border border-border bg-surface">
            <div className="flex flex-row justify-between items-center p-3">
              <h2 className="font-bold text-2xl">Pantry snapshot</h2>
              <p className="font-light text-sm">3 sample items</p>
            </div>

            <div className="overflow-x-auto px-3 pb-3">
              <table className="w-full min-w-64 text-left text-sm sm:text-base">
                <caption className="sr-only">Pantry sample items</caption>

                <thead className="text-sm text-muted">
                  <tr className="border-b border-border">
                    <th scope="col" className="w-2/5 py-3 font-medium">
                      Item
                    </th>
                    <th scope="col" className="w-2/5 py-3 font-medium">
                      Category
                    </th>
                    <th scope="col" className="w-1/5 py-3 text-right font-medium">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-3"><div className="flex items-center gap-2"><LuMilk size={30} className="shrink-0" aria-hidden="true" /> Milk</div></td>
                    <td className="py-4 pr-3 text-muted">Dairy &amp; Eggs</td>
                    <td className="py-4 text-right whitespace-nowrap">0.5 l</td>
                  </tr>

                  <tr className="border-b border-border">
                    <td className="py-4 pr-3"><div className="flex items-center gap-2"><FaBottleWater size={30} className="shrink-0" aria-hidden="true" /> Water</div></td>
                    <td className="py-4 pr-3 text-muted">Other</td>
                    <td className="py-4 text-right whitespace-nowrap">1 pack</td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-3"><div className="flex items-center gap-2"><LuBeef size={30} className="shrink-0" aria-hidden="true" /> Ground beef</div></td>
                    <td className="py-4 pr-3 text-muted">Meat & Seafood</td>
                    <td className="py-4 text-right whitespace-nowrap">1 lb</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* dashboard footer */}
        <Footer />

      </main>

    </div>
  );
}
