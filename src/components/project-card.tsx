import { useState } from "react";
import ProjectDialog from "./project-dialog";
import { Project } from "../App";



export default function ProjectCard({ title, description, image, stack, link, icon }: Project) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex gap-4 hover:bg-neutral-100 p-2 rounded-lg cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <img src={icon} alt='TrabaIcon' className='w-12 h-12 rounded-md' />
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
                stack={stack}
                link={link!}
                image={image}
            />
        </>
    )
}
