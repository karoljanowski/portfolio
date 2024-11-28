import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules"

interface ProjectImagesProps {
    images: string[]
    title: string
}

export const ProjectImages = ({ images, title }: ProjectImagesProps) => {
    return (
        <Swiper slidesPerView={1} pagination={{ clickable: true, type: 'bullets' }} modules={[Pagination]}>
            {images.map((image, index) => (
                <SwiperSlide key={index} >
                    <Image 
                        src={image} 
                        alt={title} 
                        width={1920} 
                        height={1080} 
                        className="object-cover opacity-85" 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
} 