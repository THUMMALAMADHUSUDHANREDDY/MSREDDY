function Nav(props){
    return(
        <>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
             <div className='container'>
                <a href="#" className='navbar-brand'>{props.value}</a>
            </div> 
        </nav>
        </>
    )
}
export default Nav;