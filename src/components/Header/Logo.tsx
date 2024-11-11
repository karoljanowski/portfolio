const Logo = () => {
    return (
        <div className="w-8 h-8 bg-cyan-800 bg-opacity-50 backdrop-blur rounded-md relative">
            <img src="/cursor.svg" alt="logo" className="w-full h-full p-2" />
            <img src="/cursor.svg" alt="logo" className="w-full h-full absolute top-[-2px] left-[3px] p-2 opacity-75" />
        </div>
    )
}

export default Logo