import Link from 'next/link'
export const Header = ()=>{
    return(
        <div className="static">
            <div className="flex justify-end pr-24 text-theme1 font-medium">
                <Link href="/" className="mx-2 p-4 hover:bg-theme1 hover:text-theme3 ease-in duration-300">Home</Link>
                <Link href="#" className="mx-2 p-4 hover:bg-theme1 hover:text-theme3 ease-in duration-300">About</Link>
                <Link href="#" className="mx-2 p-4 hover:bg-theme1 hover:text-theme3 ease-in duration-300">Services</Link>
                <Link href="#" className="mx-2 p-4 hover:bg-theme1 hover:text-theme3 ease-in duration-300">Resume</Link>
                <Link href="#" className="mx-2 p-4 hover:bg-theme1 hover:text-theme3 ease-in duration-300">Contact</Link>
            </div>
        </div>
    )
}