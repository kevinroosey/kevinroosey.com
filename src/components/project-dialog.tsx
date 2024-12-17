import { Dialog, DialogTitle, DialogPanel, Description, DialogBackdrop } from "@headlessui/react";
import ButtonComponent from "./button";


type ProjectDialogProps = {
    title: string;
    description: string;
    isOpen: boolean;
    stack?: string[];
    setIsOpen: (isOpen: boolean) => void;
};


export default function ProjectDialog({ title, isOpen, setIsOpen, description, stack }: ProjectDialogProps) {
    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="bg-neutral-50 w-[700px] p-4 h-fit rounded-xl">
                        <div className="">
                            <img src="./TrabaImage.svg" alt="Traba image" className="w-full rounded-lg">
                            </img>
                        </div>
                        <div className="py-4">
                            <DialogTitle className="text-2xl font-semibold text-primary-900">{title}</DialogTitle>
                            <Description className="text-neutral-800">
                                {description}
                            </Description>
                        </div>
                        <div className="w-full flex flex-wrap gap-3">
                            {stack?.map((tech) => (
                                <img src={`./icons/${tech}.svg`} alt={tech} className="w-6 h-6" />
                            ))}
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
                                link="https://gettraba.com"
                            />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )

}
