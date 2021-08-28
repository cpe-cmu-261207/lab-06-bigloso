import axios from "axios"
import { useEffect,useState } from "react"


type Datatype={
   time:{
       updated:string;
   };
   bpi:{
        THB:{
            rate_float:number;
        };
   };

}
const Current = () =>{
    const [current,setCurrent]=useState<Datatype|null>(null)
    const [loading,setLoading] = useState<boolean>(true);
 
    const fetchapi = async ()=>{
        try{
                const resp = await axios.get<Datatype>('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
                setCurrent(resp.data)
                setLoading(false)
        }
        catch(err){
                console.log(err)
                setLoading(false)
        }
    }

    useEffect(()=>{
        fetchapi()
    },[])

    const render = () =>{
        if(loading){
            return (
                <div className='text-center space-y-3'>
                <p className='text-2xl font-serif'>Current price</p>
                <p className='text-2xl'>Loading ...</p>
                </div>
            )
        }
        else{
            return(
              <div className='text-center space-y-3'>
                 <p className='text-2xl font-serif'>Current price</p>
                 <p className='text-2xl'>{(current?.bpi.THB.rate_float)?.toLocaleString()} THB</p>
                  <p> (Last updated {current?.time.updated}) </p>
              </div>  
            )
        }
    }

    return (
       render()
    )
}

export default Current