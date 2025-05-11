export function Tabs(props) { // telling Tabs function to receive the properties so we are giving it in parameters
  const { todos } = props // destructuring otr giving the properties to the constant todos

  const tabs = ['All', 'Open', 'Completed']
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === 'All' ? todos.length
          : tab === 'Open' ?
            todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length
        return (
          <button key={tabIndex} className="tab-button">
            <h4>{tab} <span>({numOfTasks})</span></h4>
          </button>
        )
      })}
    </nav>
  )
}