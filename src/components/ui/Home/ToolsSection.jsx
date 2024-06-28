const ToolsSection = () => {
    return(
        <div className="pt-32 flex flex-col gap-8">
            <div>
                <p className="font-poppins font-semibold text-2xl">Tech Stack</p>
            </div>

            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg">Client Side</p>
                <div className="grid grid-cols-3 gap-y-8">
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/html_logo.png" alt="html logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">HTML</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Web Markup</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/css_logo.png" alt="css logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">CSS</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Style Sheets</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/javascript_logo.png" alt="javascript logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Javascript</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Client-Side Scripting</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/react_logo.png" alt="react logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">React</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Dynamic Development</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/tailwind_logo.png" alt="tailwind logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Tailwind</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Utility Framework</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/redux_logo.png" alt="redux logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Redux</p>
                            <p className="font-poppins font-medium text-secondary text-sm">State Management</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg">Server Side</p>
                <div className="grid grid-cols-3 gap-y-8">
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/sql_logo.png" alt="sql logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">MySQL</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Relational Database</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/postgres_logo.png" alt="postgres logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Postgres</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Relational Database</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/express_logo.png" alt="express logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Express</p>
                            <p className="font-poppins font-medium text-secondary text-sm">API Development</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/node_logo.png" alt="node logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Node</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Runtime Environment</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/aws_logo.png" alt="aws logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">AWS S3</p>
                            <p className="font-poppins font-medium text-secondary text-sm">File Hosting</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/php_logo.png" alt="php logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">PHP</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Server-Side Scripting</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg">Tools</p>
                <div className="grid grid-cols-2 gap-y-8">
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/git_logo.png" alt="git logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Git</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Version Control</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/postman_logo.png" alt="postman logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Postman</p>
                            <p className="font-poppins font-medium text-secondary text-sm">API Testing</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col border-2 border-background gap-8 rounded-lg px-8 py-8">
                <p className="font-poppins font-medium text-lg">Others</p>
                <div className="grid grid-cols-2 gap-y-8">
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/python_logo.png" alt="python logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Python</p>
                            <p className="font-poppins font-medium text-secondary text-sm">Gen Purpose / Scripting</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-12" src="./assets/java_logo.png" alt="java logo" />
                        <div className="flex flex-col">
                            <p className="font-poppins font-medium">Java</p>
                            <p className="font-poppins font-medium text-secondary text-sm">OOP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ToolsSection;