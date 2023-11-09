import Part from './Part'
function Content(props) {
 
    return(
      <div>
        <Part 
        parts = {props.part1}
        />
        {/* <Part 
        parts = {props.part2}
        />
        <Part 
        parts = {props.part3}
        /> */}
      </div> 
    )
  }

  export default Content