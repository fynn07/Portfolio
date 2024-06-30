const ToolsSection = () => {
    return(
        <div className="mt-4 mb-28 flex flex-col gap-8">
            <div>
                <p className="font-poppins font-semibold text-2xl 2xl:text-3xl">Tech Stack</p>
            </div>

            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg 2xl:text-xl">Client Side</p>
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/html_logo.png" alt="html logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">HTML</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Web Markup</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/css_logo.png" alt="css logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">CSS</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Style Sheets</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/javascript_logo.png" alt="javascript logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Javascript</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Client-Side Scripting</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/react_logo.png" alt="react logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">React</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Dynamic Development</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/tailwind_logo.png" alt="tailwind logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Tailwind</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Utility Framework</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/redux_logo.png" alt="redux logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Redux</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">State Management</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg 2xl:text-xl">Server Side</p>
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/sql_logo.png" alt="sql logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">MySQL</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Relational Database</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/postgres_logo.png" alt="postgres logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Postgres</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Relational Database</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/express_logo.png" alt="express logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Express</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">API Development</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/node_logo.png" alt="node logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Node</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Runtime Environment</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/aws_logo.png" alt="aws logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">AWS S3</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">File Hosting</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/php_logo.png" alt="php logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">PHP</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Server-Side Scripting</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg 2xl:text-xl">Tools</p>
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/git_logo.png" alt="git logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Git</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Version Control</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/postman_logo.png" alt="postman logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Postman</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">API Testing</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/vim_logo.png" alt="vim logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Vim Motions</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Utility</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg 2xl:text-xl">Others</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/python_logo.png" alt="python logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Python</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">Gen Purpose / Scripting</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12 2xl:w-14" src="./assets/java_logo.png" alt="java logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium 2xl:text-lg">Java</p>
                            <p className="font-poppins font-medium text-secondary text-sm 2xl:text-base">OOP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ToolsSection;