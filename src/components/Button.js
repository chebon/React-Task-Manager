import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return( 
    <button onClick={onClick} style={{backgroundColor: color}} 
    className='btn'>{text}</button>
    )

}

Button.defaultProps = {
    color: 'steel blue',
  }
  

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
   // onClick: PropTypes.func.isRequired
  }


export default Button
