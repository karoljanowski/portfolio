interface ExperienceItem {
    title: string
    company?: string
    dateStart: Date
    dateEnd: Date
    color: string
    showMonth: boolean
}
interface ExperienceItemProps {
    item: ExperienceItem
}

const Experience = () => {

    const items: ExperienceItem[] = [
        { title: "Frontend Developer", company: "Silnet Media", dateStart: new Date('2023-04-01'), dateEnd: new Date(), color: "cyan", showMonth: true },
        { title: "Self education & \n Personal Projects", dateStart: new Date('2019-01-01'), dateEnd: new Date(), color: "purple", showMonth: false },
    ]

    return (
        <div>
            <div className="text-xl mb-4 font-semibold text-cyan-500 uppercase">Experience</div>
            <ExperienceItems items={items} />
            <Timeline items={items} />
        </div>
    )
}

const Timeline = ({ items }: { items: ExperienceItem[] }) => {
    const totalStartDate = items.map(item => item.dateStart).sort((a, b) => a.getTime() - b.getTime())[0]
    const totalEndDate = items.map(item => item.dateEnd).sort((a, b) => b.getTime() - a.getTime())[0]
    const dates = items.map(item => item.dateStart).sort((a, b) => a.getTime() - b.getTime()).filter(date => date !== totalStartDate && date !== totalEndDate)
    
    return (
        <div className="flex flex-col py-6 mr-4">
            {items.map((item, index) => {
                const timelineWidth = `${(item.dateEnd.getTime() - item.dateStart.getTime()) / (totalEndDate.getTime() - totalStartDate.getTime()) * 100}%`
                const timelineLeft = `${(item.dateStart.getTime() - totalStartDate.getTime()) / (totalEndDate.getTime() - totalStartDate.getTime()) * 100}%`

                return <div key={index} className="relative h-3">
                    <div style={{ width: timelineWidth, left: timelineLeft }} className={`bg-${item.color}-800 h-full rounded-sm absolute`}></div>
                </div>
            })}
            <div className="relative w-full text-sm text-gray-500">
                {totalStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                {dates.map(date => {
                    const text = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                    return <span key={text} className="absolute -translate-x-1/2" style={{ left: `${(date.getTime() - totalStartDate.getTime()) / (totalEndDate.getTime() - totalStartDate.getTime()) * 100}%` }}>
                        {text}
                    </span>
                })}
                <span className="absolute right-0">Now</span>
            </div>
        </div>
    )
}

const ExperienceItems = ({ items }: { items: ExperienceItem[] }) => {
    return (
        <div className="grid grid-cols-2 gap-4 py-4">
            {items.map((item, index) => (
                <ExperienceItem key={index} item={item} />
            ))}
        </div>
    )
}

const ExperienceItem = ({ item }: ExperienceItemProps) => {
    const { title, company, dateStart, dateEnd, color, showMonth } = item
    return (
        <div className="flex items-start gap-2">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${color}-950 shadow-lg`}>
                <div className={`h-8 w-8 rounded-md bg-${color}-800`} />
            </div>
            <div className="flex flex-col">
                <div className="text-md leading-tight font-bold">{title.split('\n').map(line => <div key={line}>{line}</div>)}</div>
                <div className="text-sm leading-tight text-gray-500">{company}</div>
                <div className="text-sm leading-tight text-gray-500">{dateStart.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {dateEnd === 'Present' ? 'Present' : dateEnd.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
            </div>
        </div>
    )
}

export default Experience;