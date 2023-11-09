import Header from './Header'
import Content from './Content'
import Total from './Total'

function Course({course}) {

    return (
        <div>
    <Header
    text= {course.name} />

    <Content
    part1 = {course.parts}
    // part2 = {course.parts[1]}
    // part3 = {course.parts[2]}
    />

    <Total 
     parts = {course.parts}
    //  part2 = {course.parts[1]}
    //  part3 = {course.parts[2]}
    />
    </div>
    
)
    }

export default Course