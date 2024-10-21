import Button from "../Partials/Button";

const HeroText = () => {
    return (
        <div className="w-1/2">
            <div className="font-bold">
                <h2 className="text-xl mb-4">Fontend Developer</h2>
                <h1 className="text-8xl leading-[0.8]">
                    Karol<br /> Janowski
                </h1>
                <Button />
            </div>
        </div>
    );
}

export default HeroText;