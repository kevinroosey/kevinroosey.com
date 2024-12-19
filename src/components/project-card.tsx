import { useState } from "react";
import ProjectDialog from "./project-dialog";
import { Project } from "../App";



export default function ProjectCard({ title, description, image, link }: Project) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex items-center gap-4 hover:bg-neutral-100 p-2 rounded-lg cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                
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
