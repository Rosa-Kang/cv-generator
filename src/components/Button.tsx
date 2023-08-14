
type Props ={
    children: React.ReactNode;
    selectedMenu: string;
    menu: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, menu, selectedMenu}: Props) => {
    const lowerCaseMenu = menu.toLowerCase().replace(/ /g, '');
    
    return (
        <button
            className={`${selectedMenu === lowerCaseMenu ? "text-primary-500 bg-gray-20" : ""} transition duration-500 rounded-[50px] outline outline-2 hover:opacity-50 py-2 px-4 m-2`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;