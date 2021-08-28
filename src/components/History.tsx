import { useHistory} from "react-router-dom";


const Select = () =>{
    let start:string=''
    let end:string=''
    let history = useHistory();
  

    const btn_click=()=>{
        const s = new Date(start)
        const e = new Date(end)

        if(start=='' || end=='' || s.getTime()>e.getTime())
        {
             alert('Please select start date and end date correctly')
        }
        else{ 
             history.push(`/history/result?start=${start}&end=${end}`)
           
        } 
    }


    return (
        <div className='text-center space-y-3 space-x-3'>
                <p className='text-2xl font-serif'>Select historical range</p>
                <span>From date</span>
                <input type='date' onChange={e => start=e.target.value }></input>
                <span>To date</span>
                 <input type='date' onChange={e => end= e.target.value}></input>
             <br />
                 <button onClick={btn_click}>Get data</button>
                 </div> 
    )
}

export default Select