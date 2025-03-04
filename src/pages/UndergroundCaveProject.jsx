import { Link } from "react-router-dom";
import BackSVG from "../components/ui/Projects/BackSVG";
import ArrowSvg from "../components/ui/Home/svg/ArrowSvg";

const UndergroundCaveProject = () => {
    return (
        <div className="bg-cebu_underground w-screen h-screen flex justify-center shadow-xl">
            <div className="overflow-y-auto sm:w-5/6 md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-2/6 my-4 border shadow-lg rounded-xl bg-white p-6 flex flex-col">
                <div className="flex justify-between">
                    <Link to={"/"} className="border flex gap-2 items-center py-1 px-2 rounded-2xl shadow-sm transition-all duration-100 hover:scale-105">
                        <BackSVG/>
                        <p className="font-poppins text-xs">Back to Main Page</p>
                    </Link>
                    <Link to={"/messaging-board"} className="border flex gap-2 items-center py-1 px-2 rounded-2xl shadow-sm transition-all duration-100 hover:scale-105">
                        <p className="font-poppins text-xs">Next Project</p>
                        <ArrowSvg/>
                    </Link>
                </div>
                <p className="text-center pt-6 font-medium text-2xl pb-2">Cebu Underground Cave</p>

                <img className="rounded-xl" src="./assets/cebu_underground.png" alt="Cebu Underground Cave" />

                <div className="flex justify-around py-6">
                    <a href="https://github.com/fynn07/cebu-underground-cave" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-opacity-50 shadow-md transition-all duration-100 hover:scale-105">Check Code</a>
                    <a href="https://cebu-underground-cave.vercel.app/" target="_blank" className="text-sm px-2 py-1 border rounded-xl border-opacity-50 shadow-md transition-all duration-100 hover:scale-105">Check Live</a>
                </div>

                <p className="font-medium text-primary 2xl:text-xl">Tech Stack</p>
                <div className="pt-5 flex flex-wrap justify-center gap-7">
                    <img className="w-10" src="./assets/react_logo.png" alt="" />
                    <img className="w-10" src="./assets/node_logo.png" alt="" />
                    <img className="w-10" src="./assets/express_logo.png" alt="" />
                    <img className="w-10" src="./assets/tailwind_logo.png" alt="" />
                    <img className="w-10" src="./assets/aws_logo.png" alt="" />
                    <img className="w-10" src="./assets/postgres_logo.png" alt="" />
                </div>

                <ul className="list-disc pl-3 pt-8">
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Social media site designed to provide a platform for Cebuanos to connect.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Technology involves the PERN (Postgres, Express, React and Node) Stack.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Implements JWT for secure user authentication.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Photos are stored in the cloud with AWS S3 Buckets.</li>
                    <li className="text-primary font-poppins text-sm 2xl:text-lg">Deployed using Vercel and Supabase.</li>
                </ul>
            </div>
        </div>
    )
}

export default UndergroundCaveProject;