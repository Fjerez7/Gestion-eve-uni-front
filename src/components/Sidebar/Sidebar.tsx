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
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </div>
    )
}