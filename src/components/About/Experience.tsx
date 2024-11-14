'use client'
import { useState } from 'react'

interface ExperienceItem {
    id: number
    title: string
    company?: string
    dateStart: Date
    dateEnd: Date
    color: string
    colorAccent: string
    showMonth: boolean
}
interface ExperienceItemProps {
    item: ExperienceItem
}

const Experience = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)
    
    const items: ExperienceItem[] = [
        { id: 0, title: "Frontend Developer", company: "Silnet Media", dateStart: new Date('2023-04-01'), dateEnd: new Date(), color: "bg-cyan-800", colorAccent: "bg-cyan-950", showMonth: true },
        { id: 1, title: "Self education & \n Personal Projects", dateStart: new Date('2020-01-01'), dateEnd: new Date(), color: "bg-purple-800", colorAccent: "bg-purple-950", showMonth: false },
    ]

    return (
        <div>
            <div className="text-xl mb-4 font-semibold text-indigo-500 uppercase">Experience</div>
            <ExperienceItems items={items} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
            <Timeline items={items} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
        </div>
    )
}

const Timeline = ({ items, hoveredItem, setHoveredItem }: { 
    items: ExperienceItem[], 
    hoveredItem: number | null,
    setHoveredItem: (id: number | null) => void 
}) => {
    const totalStartDate = items.map(item => item.dateStart).sort((a, b) => a.getTime() - b.getTime())[0]
    const totalEndDate = items.map(item => item.dateEnd).sort((a, b) => b.getTime() - a.getTime())[0]
    const dates = items.map(item => item.dateStart).sort((a, b) => a.getTime() - b.getTime()).filter(date => date !== totalStartDate && date !== totalEndDate)
    
    return (
        <div className="flex flex-col mt-6 mx-3">
            {items.map((item, index) => {
                const timelineWidth = `${(item.dateEnd.getTime() - item.dateStart.getTime()) / (totalEndDate.getTime() - totalStartDate.getTime()) * 100}%`
                const timelineLeft = `${(item.dateStart.getTime() - totalStartDate.getTime()) / (totalEndDate.getTime() - totalStartDate.getTime()) * 100}%`

                return <div 
                    key={index} 
                    className="relative h-3"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div 
                        style={{ width: timelineWidth, left: timelineLeft }} 
                        className={`${item.color} h-full rounded-sm absolute transition-opacity ${hoveredItem !== null && hoveredItem !== item.id ? 'opacity-30' : 'opacity-100'}`}
                    ></div>
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

const ExperienceItems = ({ items, hoveredItem, setHoveredItem }: { 
    items: ExperienceItem[], 
    hoveredItem: number | null,
    setHoveredItem: (id: number | null) => void 
}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:my-10">
            {items.map((item, index) => (
                <ExperienceItem 
                    key={index} 
                    item={item} 
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                />
            ))}
        </div>
    )
}

const ExperienceItem = ({ item, hoveredItem, setHoveredItem }: ExperienceItemProps & {
    hoveredItem: number | null,
    setHoveredItem: (id: number | null) => void
}) => {
    const { title, company, dateStart, dateEnd, color, colorAccent } = item
    return (
        <div 
            onMouseEnter={() => setHoveredItem(item.id)} 
            onMouseLeave={() => setHoveredItem(null)} 
            className={`flex items-start gap-2 transition-opacity ${hoveredItem !== null && hoveredItem !== item.id ? 'opacity-30' : 'opacity-100'}`}
        >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorAccent} shadow-lg`}>
                <div className={`h-8 w-8 rounded-md ${color}`} />
            </div>
            <div className="flex flex-col">
                <div className="text-md leading-tight font-bold">{title.split('\n').map(line => <div key={line}>{line}</div>)}</div>
                <div className="text-sm leading-tight text-gray-500">{company}</div>
                <div className="text-sm leading-tight text-gray-500">{dateStart.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {dateEnd === new Date() ? 'Present' : dateEnd.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
            </div>
        </div>
    )
}

export default Experience;