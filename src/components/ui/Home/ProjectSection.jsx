import ArrowSvg from "./svg/ArrowSvg";

const ProjectSection = () => {
    return(
        <div className="flex flex-col pt-36 gap-11">
            <p className="font-poppins font-semibold text-xl">Projects</p>
            <div className="grid grid-cols-2 gap-y-11 justify-items-center">
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 1 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Full-Stack Web Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Cebu Underground Cave (Social Media Site)</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 2 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Full-Stack Web Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Anonymous Messaging Board</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 3 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Front-End Web Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Gleam Band Website</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 3 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Full-Stack Application</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Book Tracker</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 4 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Python Script</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">TrackTrove (Spotify Music Downloader)</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 5 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Python Script</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Philippine Province Visualizer</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 5 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Game Development | Java</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Exiled (Brotato Clone Game)</p>
                    </div>
                </div>
                <div className="w-96 h-72 border border-gray-300 bg-background rounded-lg">
                    <img className="rounded-t-lg" src="./assets/test_image.jpg" alt="Project 5 Image" />
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-poppins text-xs text-secondary">Data Structures and Algorithms</p>
                            <ArrowSvg/>
                        </div>
                        <p className="font-poppins font-semibold text-sm text-primary">Leetcode Solved Problems</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;