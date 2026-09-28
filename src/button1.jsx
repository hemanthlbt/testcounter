function Button1({count,setCount}) {
	return(
		<>
	<button onClick={()=>{

if(count>0)
{setCount(count-1)}
}}>  Remove- </button>




		</>
	)
}



export default Button1