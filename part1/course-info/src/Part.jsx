
function Part({parts}) {
  const copy = parts.map(part => <p key= {part.name}> {part.name}: {part.exercises} </p>)

    return(
      <div>
        
        {copy}
       
      </div>
    )
  }

  export default Part