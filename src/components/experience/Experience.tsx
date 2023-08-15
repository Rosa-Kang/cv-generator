import Input from "../Input";

interface Props {
    onChange: (value: any) => void;
    experiences: any;
}

const Experiences = ({onChange, experiences}: Props) => {
    return (
            experiences.map((obj: any) => {
            const companyName = obj.companyName ;
            const positionTitle = obj.positionTitle;
            const location = obj.location ;
            const description = obj.description ;
            const startDate = obj.startDate ;
            const endDate = obj.endDate ;
            const id = obj.id ;

            return (
                <form
                className="section-form bg-white p-4 rounded-lg shadow-lg shadow-slate-20 my-8"
                id={id}
                data-array-name="experiences"
                >
                    <Input
        type="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={onChange}
        dataKey="companyName"
      />
      <Input
        type="text"
        id="position-title"
        labelText="Position Title"
        placeholder="Enter Position Title"
        value={positionTitle}
        onChange={onChange}
        dataKey="positionTitle"
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
      <Input
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange}
        dataKey="description"
      />
      
                </form>  
            )
             
        })
    )
}


export default Experiences
