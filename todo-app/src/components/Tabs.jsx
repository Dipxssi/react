export function Tabs(props) { // telling Tabs function to receive the properties so we are giving it in parameters
  const { todos , selectedTab , setSelectedTab } = props // destructuring otr giving the properties to the constant todos

  const tabs = ['All', 'Open', 'Completed']
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === 'All' ? todos.length
          : tab === 'Open' ?
            todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length
        return (
          <button onClick={() =>{
            setSelectedTab(tab)
          }} key={tabIndex} 
          className={"tab-button "+ (tab === selectedTab ? 'tab-selected' : ' ')}>
            <h4>{tab} <span>({numOfTasks})</span></h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}