type Props ={
    isOpen:null;
    sectionName: string;
    iconName:string
}

const ExpandSection = ({isOpen, sectionName, iconName}: Props) => {
    return (
        <button className=''>
            <h2>
                <i className={`${iconName}`} />
                {sectionName}
            </h2>
            <i className={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`} />
        </button>
    )
}

export default ExpandSection
