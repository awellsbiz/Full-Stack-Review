import Part from './Part'
function Content(props) {
 
    return(
      <div>
        <Part 
        part = {props.part1}
        />
        <Part 
        part = {props.part2}
        />
        <Part 
        part = {props.part3}
        />
      </div> 
    )
  }

  export default Content