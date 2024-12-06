import { Dialog, DialogTitle, DialogPanel, Description, DialogBackdrop } from "@headlessui/react";


type ProjectDialogProps = {
    title: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};


export default function ProjectDialog({title, isOpen, setIsOpen}: ProjectDialogProps) {
    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-end justify-center">
                    <DialogPanel className="bg-neutral-50 w-[900px] p-12 h-[calc(100vh-60px)] rounded-t-xl">
                        
                        
                        
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )

}