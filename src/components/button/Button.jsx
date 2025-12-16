import styles from './Button.module.scss';

const Button = (props) => {
    const { variant = 'contained', size="medium" } = props;
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>Button</button>
  )
}

export default Button