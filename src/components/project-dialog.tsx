import { Dialog, DialogTitle, DialogPanel, Description, DialogBackdrop } from "@headlessui/react";
import ButtonComponent from "./button";
import { AnimatePresence, motion } from 'framer-motion'

type ProjectDialogProps = {
    title: string;
    description: string;
    isOpen: boolean;

    setIsOpen: (isOpen: boolean) => void;
    link: string;
    image: string;
};


export default function ProjectDialog({ title, isOpen, setIsOpen, description,  link, image }: ProjectDialogProps) {
    return (
        <>
        <AnimatePresence>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
                <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            
                        >  
                <div className="fixed inset-0 flex w-screen items-center justify-center mx-auto">
                    
                    <DialogPanel className="bg-neutral-50 w-full w-full lg:w-[700px] p-2 lg:p-4 h-fit rounded-xl m-2">
                        
                        <div className="aspect-[4/2] w-full">
                        <img 
                            src={`./${image}`} 
                            alt="Traba image" 
                            className="w-full h-full object-cover rounded-lg mx-auto" 
                            height={1211}
                            width={2164}
                        />
                        </div>
                        <div className="py-4">
                            <DialogTitle className="text-2xl font-semibold text-primary-900">{title}</DialogTitle>
                            <Description className="text-neutral-800">
                                {description}
                            </Description>
                        </div>
                        
                        <div className="flex w-full justify-end gap-4">
                            <ButtonComponent
                                text="Close"
                                onClick={() => setIsOpen(false)}
                                variant="secondary"
                                className="mt-4"
                            />
                            <ButtonComponent
                                text="View project"
                                onClick={() => setIsOpen(false)}
                                variant="primary"
                                className="mt-4"
                                link={link}
                            />
                        </div>
                    </DialogPanel>
                    
                </div>
                </motion.div>
            </Dialog>
        </AnimatePresence>
        </>
    )

}
