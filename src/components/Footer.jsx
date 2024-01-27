import { RiInstagramFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => 
   (
    <div className='text-white bg-black flex flex-col justify-center items-center gap-2 p-2 '>
        <h1>Made By akm.web</h1>
        <div className='flex gap-4 text-lg'>
        <a href="https://www.instagram.com/akm.web/"><RiInstagramFill/></a>
        <a href="https://github.com/akmweb"><FaGithubSquare/></a>
        </div>
    </div>
  )


export default Footer