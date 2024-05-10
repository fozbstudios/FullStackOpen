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
    const course = 'Half Stack application development'
    const parts = [
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
    return (

        <div>
            <Header name={course} />
            <Content parts={parts} />
            <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </div>
    )
}

export default App