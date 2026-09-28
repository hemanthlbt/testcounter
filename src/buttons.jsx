function Button({count,setCount}) {
		return(
<>
		<button onClick={()=>setCount(count+1)}> Add+  </button>

</>

		)
}



export default Button