import DisplayForms from "../DisplayForms"
import ExpandSection from "../ExpandSection"

interface Props {
    educations:Array<T>,
    isOpen: null,
    onChange:(val:any)=> void,
    createForm:(val:any)=> void,
    setOpen:(val:any)=> void,
    onCancel:(val:any)=> void,
    toggleCollapsed:(val:any)=> void,
    onHide:(val:any)=> void,
    onRemove:(val:any)=> void,
}

const Education = ({educations, isOpen, onChange, createForm, setOpen, onCancel, toggleCollapsed, onHide, onRemove}: Props) => {
    return  <section className="eduction-section">
            <ExpandSection
            isOpen={isOpen}
            sectionName="Education"
            iconName="fa-solid fa-graduation-cap"
            />

            <div className={`section-content ${isOpen ? "open" : ""}`}>
                <DisplayForms
                forms={educations}
                FormComponent={EducationForm}
                onChange={onChange}
                onCancel={onCancel}
                onHide={onHide}
                onRemove={onRemove}
                toggleCollapsed={toggleCollapsed}
                titleKey="schoolName"
                arrayName="educations"
                    />
            </div>
        </section>
}

export default Education

