import { useState } from "react";
import ProjectDialog from "./project-dialog";
import { Project } from "../App";



export default function ProjectCard({ title, description, image, link, icon }: Project) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex items-center gap-4 hover:bg-neutral-100 p-2 rounded-lg cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <img src={icon} alt='TrabaIcon' className='w-16 lg:w-12 lg:h-12 rounded-lg' />
                </div>
                <div>
                    <h2 className='text-md font-semibold text-primary-800 cursor-pointer'>{title}</h2>
                    <p className='text-neutral-800 cursor-pointer'>{description}</p>
                </div>
            </div>
            <ProjectDialog
                title={title}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                description={description}

                link={link!}
                image={image}
            />
        </>
    )
}
