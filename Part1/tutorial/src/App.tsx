type Person = {
    name: string
    age: number
}
function Hello(props: Person) {
    return (
        <div>
            <p>Hello {props.name} you are {props.age}</p>
        </div>
    )
}
function App() {
    return (
        <>
            <h1>Greetings</h1>
            <Hello name='Joe' age={43} />
            <Hello name='Tom' age={53} />
            <Hello name='Nick' age={68} />
            <Footer />
        </>
    )
}
function Footer() {
    return (
        <div>
            greeting app created by <a href='https://github.com/fozbstudios'>fozbstudios</a>
        </div>
    )
}

export default App
