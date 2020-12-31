function TodoItems (props) {
return ( 
   <ul>
     {props.tasks.map(item=>{
     return (
       <li>{item.title} &nbsp; 
       <span className='remove-item'>(Remove)</span>
       </li>
       )
    })
   }
  </ul>
 )
}
export default TodoItems