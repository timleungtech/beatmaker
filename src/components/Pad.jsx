export default function Pad (props) {

  return (
    <button onClick={() => props.toggle(props.id)} 
      className={props.on ? 'on' : undefined}
      style={{
      backgroundColor: props.color, 
      height: '50px', 
      width: '50px'}}
      >
    </button>
  )
}