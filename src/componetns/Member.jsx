import { useState } from "react";

function Member(){

    const[members,setMembers]=useState([]);
    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[show, setShow]=useState(false);

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

    const handleClick2=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8081/application/getAllMembers")
        .then(res=>res.json())
        .then((result)=>{
            setMembers(result)
            console.log(members)     
            setShow(true)
    }) }


    return(
       <><h1>This is Member's page</h1>
       <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
       <input value={lastName} onChange={(e)=>setLastName(e.target.value)} /> 
       <button onClick={handleClick}>Save member</button>
       <div>
            <h2>Do you want to show all members?</h2>
            <button onClick={handleClick2}>YES</button>
            <button>NO</button>

            {show && (
                    
                <ul style={{listStyle:"none"}}>
                    {
                    members.map((member)=>(                      
                        <li key={member.id}>{member.firstName}, {member.lastName}</li>
                    ))
                    }
                </ul>
                
            )}
            
       </div>
       </>
       
    );
}

export default Member;