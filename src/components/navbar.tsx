export default function Header() {
    return (
        <div className="w-full m-auto flex gap-4">
            <div>
                <img src="./PersonalImage.png" alt="Kevin Roosey" className="w-16 h-16 rounded-xl" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="text-left text-xl font-semibold text-primary-950">Kevin Roosey</h1>
                    <p className="text-left text-md font-regular text-primary-800">Software Engineer</p>
                </div>
            </div>
        </div>
    );
}

