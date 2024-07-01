import './Title.css'

function Title({title, chaves, color}) {
  return (
    <div className='title'>
        <h4>{title}</h4>
        <h4 style={{color: `${color}`}}>{chaves}</h4>
    </div>
  )
}

export default Title