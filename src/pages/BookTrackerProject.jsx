import { Link } from "react-router-dom";
import BackSVG from "../components/ui/Projects/BackSVG";
import ArrowSvg from "../components/ui/Home/svg/ArrowSvg";

const BookTrackerProject = () => {
    return (
        <div className="bg-orange-400 w-screen h-screen flex justify-center shadow-xl">
            <div className="overflow-y-auto sm:w-5/6 md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-2/6 my-4 border shadow-lg rounded-xl bg-white p-6 flex flex-col">
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
                    <a href="https://www.youtube.com/watch?v=yY943woNK6g&ab_channel=Fynn" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-opacity-50 shadow-md transition-all duration-100 hover:scale-105">View Demo</a>
                </div>

                <p className="font-medium text-primary 2xl:text-xl">Tech Stack</p>
                <div className="pt-5 flex justify-center gap-7 flex-wrap">
                    <img className="w-10" src="./assets/java_logo.png" alt="" />
                    <img className="w-10" src="./assets/sql_logo.png" alt="" />
                </div>

                <ul className="list-disc pl-3 pt-8">
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">An application to help users track and manage their books.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Made with Java, JavaFX was utilized for the user interface.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">JDBC and SQL are used for database connectivity and management.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Involves all CRUD operations for the backend.</li>
                </ul>
            </div>
        </div>
    )
}

export default BookTrackerProject;