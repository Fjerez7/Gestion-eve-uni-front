import {Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import {FC} from "react";

interface SidebarProps {
    OnClose: () => void;
    IsOpen: boolean;
}

export const Sidebar:FC<SidebarProps> = ({IsOpen,OnClose}) => {
    return(
        <div>
        <Drawer placement={'left'} onClose={OnClose} isOpen={IsOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                <DrawerBody>
                    <p>Seccion Principal</p>
                    <p>Seccion de servicios</p>
                    <p>Seccion de nosotros</p>
                    <p>Contactanos</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </div>
    )
}