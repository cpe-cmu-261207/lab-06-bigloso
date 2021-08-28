import { useLocation } from "react-router"
import { useState,useEffect } from "react";
import axios from "axios";


type Datatype={
    bpi: Record<string,number>;
}
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Result=()=>{
    let quary = useQuery()
    const start  = quary.get("start")
    const end  = quary.get("end")
    const [data,setData] = useState<Datatype | null>(null)
    const [loading,setLoading] = useState<boolean>(true)
    const [err,setErr] = useState<boolean>(false)
 
    
    
    const fetchapi = async () =>{
        try{
            const resp = await axios.get<Datatype>(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${start}&end=${end}`)
            setData(resp.data)
            setLoading(false) 
            
          
        }
        catch(err){
            setErr(true)
            setLoading(false)
        }
    }
  
    useEffect(()=>{
        fetchapi()
       
    },[])

   

    const render = () =>{
      
        if(loading){
            return(
                <div className='text-center space-y-3'>
                <p className='text-2xl font-serif'>Historical price</p>
                <p className='text-2xl'>Loading ...</p>
              </div>  
               
            )
        }
        else if(err)
        {
            return(
                <div className='text-center space-y-3'>
                <p className='text-2xl font-serif'>Historical price</p>
                <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
              </div>  
            )
        }
        else{   
        let arrData: [string,number][]  = []
        if(data?.bpi)
        {
           arrData = Object.entries(data.bpi)
        }
            return( 
             <div className='text-center space-y-3'>
                <p className='text-2xl font-serif'>Historical price</p>
                <p className='text-xl font-serif'> ( From {start} To {end} )</p>
                 <ul>
             {
             arrData.map(data=> <li className='text-xl' key={data[0]}>{data[0]} - {(data[1]).toLocaleString()} THB</li>)
            }
                  </ul>
              </div>  
 
            )
        }
    }
    return (
        render()   
    )
}

export default Result