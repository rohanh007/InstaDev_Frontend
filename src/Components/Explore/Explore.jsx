import axios from "axios";
import { useEffect, useState } from "react";
import Postcard from "../Postcard/Postcard";


const Explore=()=>{
    const [Allpost,setAllpost]=useState();


    useEffect(()=>{
       const fetchallpost= async ()=>{
                   try{
                      const allpost=await axios.get('http://localhost:6500/api/posts');

                    //   console.log(allpost);
                     setAllpost(allpost);
                   }catch(error){
                      console.log(error);
                   }
       }
       fetchallpost();
    },[])

console.log(Allpost);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
           {
                Allpost && Allpost.data.map((post,index)=>(
                             <Postcard data={post} key={index} explore={true}></Postcard>
                ))
            }
        </div>
    )
}

export default Explore;