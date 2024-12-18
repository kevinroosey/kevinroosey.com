import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Icons } from "./icons";
import { MenuSeparator } from "@headlessui/react";

export default function Links() {
    return (
        <div className="bg-gradient-to-t from-neutral-800 to-neutral-700 border-2 border-neutral-500 h-fit w-fit rounded-xl flex justify-center items-center bottom-5 fixed gap-4 px-4 py-2 mx-auto right-0 left-0">
            <div>
                <a href="/x.com/itskevin" className="text-white">
                <div className="flex gap-1 items-center">
                    <Icons.twitter className="h-4 w-4 text-white" />
                    <span className="text-white text-xs">@itskevin</span>
                </div>
                </a>
            </div>

            <MenuSeparator className="h-5 w-0.5 bg-neutral-600" />
            <div className="">
                <a href="mailto@kevinroosey@gmail.com" className="text-white">
                    <div className="flex gap-1 items-center">
                        <EnvelopeIcon className="h-5 w-5" />
                        <span className="text-white text-xs">kevinroosey@gmail.com</span>
                    </div>
                </a>
            </div>
            
            <MenuSeparator className="h-5 w-0.5 bg-neutral-600" />
            <div>
                <a href="mailto@kevinroosey@gmail.com" className="text-white">
                    <div className="flex gap-1 items-center">
                        <Icons.gitHub className="h-4 w-4" />
                        <span className="text-white text-xs">kevinroosey</span>
                    </div>
                </a>
            </div>
        </div>
    )
}