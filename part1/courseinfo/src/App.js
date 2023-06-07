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

  const Part = (number) => {
    return (
      <p>
        {course.parts[number.number].name} {course.parts[number.number].exercises}
      </p>
    )
  }

  const Header = () => {
    return (
        <h1>{course.name}</h1>
    )
  }

  const Content = () => {
    return (
      <>
       <Part number={0}/>
       <Part number={1}/>
       <Part number={2}/>

      </>
    )
  }

  const Total = () => {
    return (
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
}

export default App;
