import { useEffect, useState } from "react"
import Postcard from "../Postcard/Postcard";
import axios from "axios";
import Addfriends from "../Addfriends/Addfriends";
const Home =()=>{
    const [post, setpost]=useState([]);
   
    const jwttoken=localStorage.getItem('token');
     useEffect(()=>{

        const fetchpost= async ()=>{
              try{
                const posts=await axios.get('http://localhost:6500/api/friendspost',{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${jwttoken}`
                    }
                })
                setpost(posts?.data);
              }catch(error){
                  console.log(`error from friends post ${error}`);
              }
        }   
      fetchpost();
    },[])
 

console.log(post);

    return(
       <div className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2 pt-5 ">
        <div className="w-full sm:w-full md:w-[60%] lg:w-[65%] flex flex-col gap-2">
            {
                post && post.map((post,index)=>(
                             <Postcard data={post} key={index}></Postcard>
                ))
            }
        </div>
        <div className="w-full sm:w-full md:w-[40%] lg:w-[35%] hidden md:block">
        <div className='flex flex-row justify-between pr-5'>
                <p className='text-base cursor-pointer'>Suggested for you</p>
                <p className='text-base cursor-pointer'>See all</p>
            </div>
            <div>
            <Addfriends/>
            <Addfriends/>
            <Addfriends/>
            <Addfriends/>
            <Addfriends/>
            </div>
            </div>
       </div>
    )
}

export default Home