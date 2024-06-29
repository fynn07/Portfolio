import { Link } from "react-router-dom";

const MessagingBoardProject = () => {
    return (
        <div className="bg-background w-screen flex justify-center">
            <div className="h-screen w-2/4 my-4 border shadow-lg rounded-xl bg-white p-6 flex flex-col">
                <div className="flex justify-between">
                    <Link to={"/"}>
                        <p className="font-poppins text-xs border py-1 px-2 rounded-2xl shadow-sm">Back to Main Page</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MessagingBoardProject;