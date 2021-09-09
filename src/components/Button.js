import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    return (
     <button onClick={onClick} style={{backgroundColor : color}} className='btn'>{text}</button>
     )
}
Button.defaultProps = {
    color: 'steelblue',
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
//pass e for the event object for onClick funtion for details of the element
//const onClick = (e) => {}

export default Button
