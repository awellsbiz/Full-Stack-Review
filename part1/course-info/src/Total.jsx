function Total({ parts }) {
   
  
    return (
      <h4>
        Number of exercises: {parts.reduce((accumulator, part) => {
      return accumulator + part.exercises;
    }, 0)}
      </h4>
    );
  }
  
  export default Total;