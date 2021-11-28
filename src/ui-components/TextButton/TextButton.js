import { BaseButton } from "../BaseButton/BaseButton";
import styles from './TextButton.css';

const TextButton = ({title}) => {
    return (
        <BaseButton title={title} className={styles.button}/>
    );
}

export { TextButton };