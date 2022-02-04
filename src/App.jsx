import { useState, useEffect } from "react";


export default function App (){

const[users, setUsers] = useState([])
const[page, setPage] = useState(1)
const[loading, setLoading] = useState(true)

useEffect( function (){
setLoading(true)
fetch('https://api.github.com/search/repositories?q=react&per_page=50&page='+page)
.then(preResult => preResult.json())
.then(result => {
setUsers(result.items);
setLoading(false)

})

}, [page])


function increment(){
setPage(page+1)
}


function decrement(){
setPage(page-1)
}

if(loading){
return <div className="bgImg"><img  src="https://c.tenor.com/9WFsBeb7sr8AAAAC/loading-gif.gif" alt="" /></div>

}

return(
<div className="main">
    <h1>Repository Full Name and Page link</h1>
    <h3>Current Page: {page}</h3>

    <button onClick={increment}>Next >></button>
    {page>1 && <button onClick={decrement}> prev >> </button>}

    {users.map(repo => <div key={repo.id} className="list">{repo.full_name} <a href={repo.html_url}>Page Link</a> </div>
    )}
</div>
)
}