import { Link } from "react-router-dom";
import BackSVG from "../components/ui/Projects/BackSVG";

const UndergroundCaveProject = () => {
    return (
        <div className="bg-cebu_underground w-screen flex justify-center">
            <div className="h-screen w-2/4 my-4 border shadow-lg rounded-xl bg-white p-6 flex flex-col">
                <div className="flex justify-between">
                    <Link to={"/"} className="border flex gap-2 items-center py-1 px-2 rounded-2xl shadow-sm">
                        <BackSVG/>
                        <p className="font-poppins text-xs">Back to Main Page</p>
                    </Link>
                </div>
                <p className="text-center pt-6 font-medium text-3xl pb-6">Cebu Underground Cave</p>
                <img className="rounded-xl" src="./assets/cebu_underground.png" alt="Cebu Underground Cave" />
                <div className="flex justify-around py-6">
                    <a href="https://github.com/fynn07/cebu-underground-cave" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-black shadow-sm transition-all duration-100 hover:bg-black hover:text-white hover:scale-105">Check Code</a>
                    <a href="https://cebu-underground-cave.vercel.app/" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-black shadow-sm transition-all duration-100 hover:bg-black hover:text-white hover:scale-105">Check Live</a>
                </div>
            </div>
        </div>
    )
}

export default UndergroundCaveProject;