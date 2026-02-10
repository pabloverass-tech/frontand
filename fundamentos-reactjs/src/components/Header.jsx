import styles from './Header.module.css'

import ractLogo from '../assets/react.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ractLogo} alt='Logotipo' /> 
        </header>
        
    );
}