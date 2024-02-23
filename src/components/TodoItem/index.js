import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props
  const {title, id} = todo

  const onDelete = () => {
    // console.log('on Delete clicked')
    onDeleteTodo(id)
  }

  return (
    <li className="list-items">
      <div className="each-todo-container">
        <p className="each-todo">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
