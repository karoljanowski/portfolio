import Button from "../Button"

const AboutText = () => {
    return (
        <div className="py-20 px-6 sm:px-12 h-full relative flex flex-col justify-center">
            <div className="text-4xl font-bold mb-4">About me</div>
            <p className="text-lg">I am a passionate frontend developer with over a year of professional experience. My goal is to
                continuously develop my skills in modern web technologies, and I am eager to embrace new
                challenges that allow me to grow and expand my expertise.
            </p>
            <Button href="#contact">Contact me!</Button>
        </div>
    )
}

export default AboutText