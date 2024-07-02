import './Midias.css'

// eslint-disable-next-line react/prop-types
const Midias = ({Type}) => {
  return (
    <div className='midias'>
        <a target="_blank" href='https://github.com/luizGMPortfolio' className={`git ${Type === 'white' ? 'GitWhite':'GitBlack'}`}></a>
        <a target="_blank" href='https://www.linkedin.com/in/luiz-gustavo-da-silva-moraes-9276b72a0/' className={`link ${Type === 'white' ? 'Linkwhite':'LinkBlack'}`}></a>
    </div>
  )
}

export default Midias