import react from "react"
import "./Search.css"

const Search = ({onChange})=>{

return (


<form className="form-search">
	<label for="search"  className="label-search">Search</label>
	<input className="input-search" id="search" type="search" name="inputsearch" pattern=".*\S.*" required onChange={onChange}/>
	<span className="caret"></span>
</form>

	)
}


export default Search ;