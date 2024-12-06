import { useState } from "react";
import ProjectDialog from "./project-dialog";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
};


export default function ProjectCard({ title, description, image }: ProjectCardProps) {

   const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex gap-4 hover:bg-secondary p-2 rounded-lg cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <img src={image} alt='TrabaIcon' className='w-12 h-12 rounded-md' />
                </div>
                <div>
                    <h2 className='text-md font-semibold text-primary-800 cursor-pointer'>{title}</h2>
                    <p className='text-neutral-800 cursor-pointer'>{description}</p>
                </div>
            </div>
            <ProjectDialog title={title} isOpen={isOpen} setIsOpen={setIsOpen} />        
        
        </>
    )
}