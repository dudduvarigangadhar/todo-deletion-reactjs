// Write your code here
import SimpleTodos from '../SimpleTodos'
import './index.css'

const TodoItem = props => {
  const {name} = props

  return (
    <div>
      <div className="each-todo-container">
        <p className="each-todo">{name}</p>
        <button className="button">Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
