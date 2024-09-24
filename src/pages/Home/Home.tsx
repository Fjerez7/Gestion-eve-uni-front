import {Sidebar} from "../../components/Sidebar/Sidebar.tsx";
import {Button, useDisclosure} from "@chakra-ui/react";
import UniLogo from '../../assets/icono-uniciencia.png'
import styles from './Home.module.css'
import {Footer} from "../../components/Footer/Footer.tsx";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div>
            <Sidebar IsOpen={isOpen} OnClose={onClose}/>
            <header className={styles.headerContainer}>
                <Button colorScheme='blue' className={"material-symbols-outlined"} variant={'outline'} onClick={onOpen}>menu</Button>
                <div className={styles.headerLogoTitle}>
                    <img src={UniLogo} alt={'Icono de Uniciencias'}/>
                    <h2>Gestion de eventos</h2>
                </div>
            </header>
            <main></main>
            <Footer/>
        </div>
    )
}

export default Home