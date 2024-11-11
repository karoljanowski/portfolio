import Button from "../Button";

const HelloBox = () => {
    return (
        <div className="flex flex-col justify-center items-start h-full gap-1">
            <div className="text-xl text-cyan-500 uppercase font-semibold">Hello there!</div>
            <div className="text-3xl font-extrabold">I&apos;m Karol Janowski</div>
            <div className="text-lg font-normal">Frontend Developer with a passion for modern and creative solutions</div>
            <Button href="#contact" className="mt-2">Contact me!</Button>
        </div>
    )
}

export default HelloBox;