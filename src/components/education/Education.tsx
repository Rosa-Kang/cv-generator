import Input from "../Input";

interface Props {
    onChange: (value: any) => void;
    educations: any;
}

const Education = ({ onChange, educations }: Props) => {

    return (
        educations.map((obj: any) => {
            const degree = obj.degree;
            const schoolName = obj.schoolName;
            const location = obj.location;
            const startDate = obj.startDate;
            const endDate = obj.endDate;
            const id = obj.id;

            return (
                <form
                className="section-form bg-white p-4 rounded-lg shadow-lg shadow-slate-20 my-8"
                id={id}
                data-array-name="educations"
                >
                    <Input
                    type="text"
                    id="school-name"
                    labelText="School"
                    placeholder="Enter school / university"
                    value={schoolName}
                    onChange={onChange}
                    dataKey="schoolName"
                    />
                    <Input
                    type="text"
                    id="degree"
                    labelText="Degree"
                    placeholder="Enter Degree / Field Of Study"
                    value={degree}
                    onChange={onChange}
                    dataKey="degree"
                    />

                    <Input
                    type="text"
                    id="date"
                    labelText="Start Date"
                    placeholder="Enter Start Date"
                    value={startDate}
                    onChange={onChange}
                    dataKey="startDate"
                    />
                    <Input
                    type="text"
                    id="date"
                    labelText="End Date"
                    placeholder="Enter End Date"
                    value={endDate}
                    onChange={onChange}
                    dataKey="endDate"
                    />
                    <Input
                    type="text"
                    id="location"
                    labelText="Location"
                    placeholder="Enter Location"
                    value={location}
                    onChange={onChange}
                    dataKey="location"
                    />
        </form>  
            )
             
        })
    )
}


export default Education
