import Image from "next/image";

const NavBar: React.FC = () => {
    return (
        <>
            <nav className="w-full bg-yellow-light h-20 top-0 left-0 right-0 sticky">
                <div className="flex justify-between items-center px-4">
                    <div>
                        <div className="flex items-center justify-center w-fit h-20 mx-auto">
                        <Image
                            src="/logo.png"
                            alt="Chef Logo"
                            width={100}
                            height={100}
                        />
                        </div>
                    </div>
                    <ul className="flex gap-x-4 items-center">
                        <li className="flex items-center justify-center text-black-text w-fit h-20">
                            <h3 className="font-black">HOME</h3>
                        </li>
                        <li className="flex items-center justify-center text-black-text w-fit h-20">
                            <h3 className="font-black">RECIPES</h3>
                        </li>
                        <li className="flex items-center justify-center text-black-text w-fit h-20">
                            <h3 className="font-black">KITCHEN ESSENTIALS</h3>
                        </li>
                        <li className="flex items-center justify-center w-fit h-20">
                        <Image
                            src="/search.svg"
                            alt="Search Logo"
                            width={24}
                            height={24}
                        />
                        </li>
                    </ul> 
                    
                </div>
            </nav>
        </>
    )
} 

export default NavBar;