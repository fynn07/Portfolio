import { Link } from "react-router-dom";
import BackSVG from "../components/ui/Projects/BackSVG";
import ArrowSvg from "../components/ui/Home/svg/ArrowSvg";

const BookTrackerProject = () => {
    return (
        <div className="bg-orange-400 w-screen flex justify-center shadow-xl">
            <div className="h-screen w-2/5 my-4 border shadow-lg rounded-xl bg-white p-6 flex flex-col">
                <div className="flex justify-between">
                    <Link to={"/"} className="border flex gap-2 items-center py-1 px-2 rounded-2xl shadow-sm transition-all duration-100 hover:scale-105">
                        <BackSVG/>
                        <p className="font-poppins text-xs">Back to Main Page</p>
                    </Link>
                    <Link to={"/tracktrove"} className="border flex gap-2 items-center py-1 px-2 rounded-2xl shadow-sm transition-all duration-100 hover:scale-105">
                        <p className="font-poppins text-xs">Next Project</p>
                        <ArrowSvg/>
                    </Link>
                </div>
                <p className="text-center pt-6 font-medium text-2xl pb-2">FS Book Tracker</p>

                <img className="rounded-xl" src="./assets/book_tracker.png" alt="Book Tracker" />

                <div className="flex justify-around py-6">
                    <a href="https://github.com/fynn07/FSbooktracker" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-opacity-50 shadow-md transition-all duration-100 hover:scale-105">Check Code</a>
                    <a href="" className="text-sm px-2 py-1 border rounded-xl border-opacity-50 shadow-md transition-all duration-100 hover:scale-105">View Demo</a>
                </div>

                <p className="font-medium text-primary">Tech Stack</p>
                <div className="pt-5 flex justify-center gap-7">
                    <img className="w-10" src="./assets/java_logo.png" alt="" />
                    <img className="w-10" src="./assets/sql_logo.png" alt="" />
                </div>

                <ul className="list-disc pl-3 pt-8">
                    <li className="text-primary font-poppins text-sm">Used React for the backend</li>
                </ul>
            </div>
        </div>
    )
}

export default BookTrackerProject;