import styles from './Footer.module.css'

export const Footer = () => {
    return(
        <footer>
            <div className={styles.sectionSocialNetworks}>
                <ul>
                    <li>
                        <a href={'https://github.com/Fjerez7'} target={'_blank'} >Github</a>
                    </li>
                    <li>
                        <a href={'https://www.linkedin.com/in/fabian-jerezx/'} target={'_blank'}>Linkedln</a>
                    </li>
                    <li>
                        <a>Twitter</a>
                    </li>
                </ul>
            </div>
            <div className={styles.sectionAuthor}>
                <p>© 2024 Fabian Andres Jerez Manrique</p>
            </div>
        </footer>
    )
}