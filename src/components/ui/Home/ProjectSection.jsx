import ArrowSvg from "./svg/ArrowSvg";
import { Link } from "react-router-dom";

const ProjectSection = () => {
    return(
        <div className="flex flex-col pt-8 gap-11">
            <p className="font-poppins font-semibold text-xl 2xl:text-2xl">Projects</p>
            <div className="grid grid-cols-1 gap-y-11 justify-items-center xl:grid-cols-2 2xl:grid-cols-3">
                <Link to={"/cebu-underground-cave"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg h-48 sm:h-52" src="./assets/cebu_underground.png" alt="Project 1 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Full-Stack Web Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-xs sm:text-sm text-primary">Cebu Underground Cave (Social Media Site)</p>
                    </div>
                </Link>
                <Link to={"/messaging-board"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg " src="./assets/messaging_board.png" alt="Project 2 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Full-Stack Web Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Anonymous Messaging Board</p>
                    </div>
                </Link>
                <Link to={"/gleam"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg" src="./assets/gleam_website.png" alt="Project 3 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Front-End Web Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Gleam Band Website</p>
                    </div>
                </Link>
                <Link to={"/book-tracker"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg h-48 sm:h-52" src="./assets/book_tracker.png" alt="Project 3 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Full-Stack Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Book Tracker</p>
                    </div>
                </Link>
                <Link to={"/tracktrove"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg w-full h-48 sm:h-52" src="./assets/tracktrove.png" alt="Project 4 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Python Script</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">TrackTrove (Spotify Music Downloader)</p>
                    </div>
                </Link>
                <Link to={"/visualizer"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg h-48 sm:h-52 w-full" src="./assets/philippines_visualizer.jpeg" alt="Project 5 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Python Script</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Philippine Province Visualizer</p>
                    </div>
                </Link>
                <Link to={"/exiled"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg" src="./assets/exiled_game.png" alt="Project 5 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Game Development | Java</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Exiled (Brotato Clone Game)</p>
                    </div>
                </Link>
                <Link to={"/leetcode"} className="w-80 h-64 sm:w-96 sm:h-72 border border-gray-300 bg-background rounded-lg transition ease-in-out hover:scale-105 hover:cursor-pointer">
                    <img loading="lazy" className="rounded-t-lg h-48 sm:h-52 w-full" src="./assets/leetcode_image.png" alt="Project 5 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Data Structures and Algorithms</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Leetcode Solved Problems</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectSection;