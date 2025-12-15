import './Button.css';

const Button = (props) => {
    const { variant = 'contained', size="medium" } = props;
  return (
    <button className={`button ${variant} ${size}`}>Button</button>
  )
}

export default Button