

const GridSection = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4 min-h-screen">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
    )
}

const GridItem = () => {
    return <div className="bg-white h-full rounded-md"></div>
}

export default GridSection;