import { useState } from "react";

export default function Form(){

    const [innput, setInnput] = useState("");

    // function changes_made (e){
        //     console.log(e.target.value);        
        // }

        // changes_made = (e) =>{
        //     console.log(e.target.value);
        //     setInnput(e.target.value);
    // }

    return <>    
        <form>
            <input onChange={ (e)=>setInnput(e.target.value)} type="text" value={innput} />

            {/* onChange={ function demo(e){
                    return changes_made(e);
            }}                 */}
            
        </form>
    </>
}