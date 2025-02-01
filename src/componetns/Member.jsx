import { useEffect, useState } from "react";

function Member(){

    const[members,setMembers]=useState([]);
    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        const member={firstName, lastName}
        console.log(member);
        fetch("http://localhost:8081/application/saveMember",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(member)
        }).then(()=>{
            console.log("Member added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8081/application/getAllMembers")
        .then(res=>res.json())
        .then((result)=>{
            setMembers(result)
            console.log(members)
        }  
    )},[]);


    return(
       <><div>This is Member</div>
       <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
       <input value={lastName} onChange={(e)=>setLastName(e.target.value)} /> 
       <button onClick={handleClick}>Save member</button>
       </>
    );
}

export default Member;