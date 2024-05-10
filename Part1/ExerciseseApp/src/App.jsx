const Total = (props) => {
    return( <p>Number of exercises {props.total}</p>)
}
const Header = (props) => {
    return (<div>
        <h1>{props.name}</h1>

    </div>)
}
const Content = (props) => {
    return(
           props.parts.map(function(part,index){
               return <p key={index}>{part.name} {part.count}</p>;
                      })
        )

}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (

        <div>
            <Header name={course} />
            <Content parts={[{ name: part1, count: exercises1 }, { name: part2, count: exercises2 }, { name: part3, count: exercises3 }]} />
            <Total total={exercises1+exercises2+exercises3} />
        </div>
    )
}

export default App