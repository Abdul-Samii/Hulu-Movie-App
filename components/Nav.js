import requests from "../utils/requests"
import { useRouter } from "next/router"

export const Nav = () =>{
    const router = useRouter();
    return(
        <nav className="relative">
            <div className="flex text-2xl px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20
            overflow-scroll scrollbar-hide">
                {Object.entries(requests).map(([key,{title,url}])=>(
                    <h2 key={key} className='cursor-pointer transition duration-100 last:pr-24
                    transform hover:scale-125 hover:text-white active:text-red-500'
                    onClick={()=>router.push(`/?genra=${key}`)}
                    >{title}</h2>
                ))}
            </div>
       <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>

        </nav>
    )
}