import { Link } from "react-router-dom";
import BackSVG from "../components/ui/Projects/BackSVG";

const LeetcodeProject = () => {
    return (
        <div className="bg-gray-400 w-screen flex justify-center shadow-xl">
            <div className="h-screen w-2/5 my-4 border shadow-lg rounded-xl bg-white p-6 flex flex-col">
                <div className="flex justify-between">
                    <Link to={"/"} className="border flex gap-2 items-center py-1 px-2 rounded-2xl shadow-sm transition-all duration-100 hover:scale-105">
                        <BackSVG/>
                        <p className="font-poppins text-xs">Back to Main Page</p>
                    </Link>
                </div>
                <p className="text-center pt-6 font-medium text-2xl pb-2">Leetcode Solved Problems Compilation</p>

                <img className="rounded-xl" src="./assets/leetcode_image.png" alt="Leetcode" />

                <div className="flex justify-around py-6">
                    <a href="https://github.com/fynn07/LeetCode" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-opacity-50 shadow-md transition-all duration-100 hover:scale-105">View Repository</a>
                </div>

                <ul className="list-disc pl-3 pt-8">
                    <li className="text-primary font-poppins text-sm">A bunch of Data Structures and Algorithm problems that I solved for fun.</li>
                </ul>
            </div>
        </div>
    )
}

export default LeetcodeProject;