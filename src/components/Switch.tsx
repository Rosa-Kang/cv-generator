
type Props = {
    children: React.ReactNode;
    loadTemplate: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Switch = ({ children, onClick, loadTemplate }: Props) => {

    return (
        <button
            className={`${loadTemplate == children ? "bg-gray-200" : ""} transition duration-500 rounded-md hover:opacity-50 px-4 py-2 m-2`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Switch
