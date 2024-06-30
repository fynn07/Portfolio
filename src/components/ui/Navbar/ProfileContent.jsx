const ProfileContent = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="w-20 rounded-full mb-2 2xl:w-28" src="./assets/self_portrait.jpg" alt="self portrait" />
            <p className="text-primary text-md font-poppins font-semibold hidden lg:inline 2xl:text-xl">Fynn Borja</p>
            <p className="text-secondary text-sm font-poppins font-medium hidden lg:inline 2xl:text-lg">Software Engineer</p>
        </div>
    )
}

export default ProfileContent;