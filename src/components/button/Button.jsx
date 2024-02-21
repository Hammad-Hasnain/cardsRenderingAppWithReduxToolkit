import styles from './button.module.css'

const Button = ({ eventAddToCart, text }) => <button className={styles.btn} onClick={eventAddToCart}>{text}</button>

export default Button