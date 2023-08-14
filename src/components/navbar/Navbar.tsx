import Button from "@/components/Button"

type Props = {
    selectedMenu: string;
    setSelectedMenu: (value:string) => void;
}

const Navbar = ({setSelectedMenu, selectedMenu}: Props) => {
    return (
        <nav className="navBar">
            <Button 
            menu='content' 
            onClick={() => setSelectedMenu('content')}
            selectedMenu={selectedMenu}>
                Content
            </Button>

            <Button 
            onClick={()=> setSelectedMenu('customize')}
            selectedMenu={selectedMenu} 
            menu='customize'>
                Customize
            </Button>
        </nav>
    )
}

export default Navbar
