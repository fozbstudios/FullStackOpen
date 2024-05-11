/* eslint-disable react/prop-types */
const Total = (props) => {
    return (<p>Number of exercises {props.total}</p>)
}
const Header = (props) => {
    return (<div>
        <h1>{props.name}</h1>

    </div>)
}
const Content = (props) => {
    return (
        //I would hae used map here again but it looks like the turoial wants individual p tags
        <>
            <Part info={props.parts[0]} />
            <Part info={props.parts[1]} />
            <Part info={props.parts[2]} />
        </>
    )

}
const Part = (props) => {
    return <p>{props.info.name} {props.info.exercises}</p>

}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (

        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

export default App