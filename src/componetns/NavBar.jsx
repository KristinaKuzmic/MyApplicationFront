

function NavBar (){
    return (
        <div className="nav-bar" style={{background:"#a9ecf2", height:50}}>           
                <li style={{listStyle:"none", display:"flex", flexDirection:"row", gap:30, padding:10, justifyContent:"space-evenly"}}>
                    <ul style={{margin:0, padding:0}}><a href="">Member</a></ul>
                    <ul style={{margin:0, padding:0}}><a href="">Group</a></ul>
                    <ul style={{margin:0, padding:0}}><a href="">Course</a></ul>
                    <ul style={{margin:0, padding:0}}><a href="">Lesson</a></ul>
                    <ul style={{margin:0, padding:0}}><a href="">Attendance</a></ul>
                    <ul style={{margin:0, padding:0}}><a href="">Professor</a></ul>
                </li>

        </div>
    );
}

export default NavBar;