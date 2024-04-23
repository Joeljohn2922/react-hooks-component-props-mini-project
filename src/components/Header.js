
function Header({name,blogData}){ 
    console.log(name)
    console.log(blogData)
    return( 
     <header> 
        <h1> {name} </h1>
     </header>
    )
} 

export default Header