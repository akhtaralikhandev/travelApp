
const AboutPage = ()=> {
    const fetchAllUsers = ()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    fetchAllUsers()
    return(
        <div>
            <span>This is about page </span>
        </div>
    )
}
export default AboutPage