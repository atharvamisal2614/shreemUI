import { useRouter } from "next/router"
import { useEffect } from "react"
import { BASE_URL } from "@/utils/config";
function AllBlogs(){
    const router = useRouter();

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            router.push(`${BASE_URL}/admin`)
        }
    })
    return(
        <>All blogs here</>
    )
}
export default AllBlogs