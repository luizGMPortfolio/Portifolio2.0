import './Midias.css'

const Midias = ({Type}) => {
  return (
    <div className='midias'>
        <div className={`git ${Type === 'white' ? 'GitWhite':'GitBlack'}`}></div>
        <div className={`link ${Type === 'white' ? 'Linkwhite':'LinkBlack'}`}></div>
    </div>
  )
}

export default Midias