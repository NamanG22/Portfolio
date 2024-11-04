import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { BsLinkedin } from "react-icons/bs";


export const Contact = ()=>{
    return(
        <div className="h-screen items-center flex flex-col absolute right-5 top-0">
            <div className="flex-1 w-0.5 m-auto bg-theme1"></div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                <LinkItem icon={<BsLinkedin/>} spanText="Linkedin" />
                <LinkItem icon={<FaInstagram/>} spanText="Instagram" />
                <LinkItem icon={<FaXTwitter/>} spanText="X" />
                <LinkItem icon={<MdAlternateEmail/>} spanText="Gmail" />
                <LinkItem icon={<FaGithub/>} spanText="Github" />
            </div>
            <div className="flex-1 w-0.5 m-auto bg-theme1"></div>
        </div>
    )
}

const LinkItem = ({icon,spanText}:{icon:JSX.Element;spantext:string}) =>(
    <Link href="#" className="group relative flex items-center">
        <div className="text-xl transform transition-transform duration-200 group-hover:scale-150">{icon}</div>
        <span className="absolute right-full mr-2 hidden group-hover:flex bg-theme1 text-theme3 text-sm px-2 py-1 rounded-lg transition-opacity duration-200">
            {spanText}
        </span>
    </Link>
)