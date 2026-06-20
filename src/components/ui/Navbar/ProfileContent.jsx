const ProfileContent = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="w-14 rounded-2xl mb-3 ring-1 ring-black/10 shadow-md lg:w-20 2xl:w-24" src="./assets/me.jpeg" alt="self portrait" />
            <p className="text-primary text-md font-poppins font-semibold hidden lg:inline 2xl:text-xl">Fynn Borja</p>
            <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-lg">Software Engineer</p>
        </div>
    )
}

export default ProfileContent;
