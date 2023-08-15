import { useState } from "react"
import Navbar from "./components/navbar/Navbar";
import TemplateLoader from "./components/templateLoader/TemplateLoader";
import exampleData from "./example-data";
import Personal from "./components/personal/Personal";
import Education from "./components/education/Education";
import Experiences from "./components/experience/Experience";

useState
function App() {
  const [selectedMenu, setSelectedMenu] = useState('content');
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [loadTemplate, setLoadTemplate] = useState('Load Template');

  const handleSectionChange = (e:any) => {
    const { key } = e.target.dataset;
    const inputVal = e.target.value;
    const form = e.target.closest('.section-form');
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections, 
      [arrayName]: section.map((obj:any) => {
          if(obj.id === id) obj[key] = inputVal
      })
    })
  }

  const handlePersonalInfoChange = (e:any) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  const onClear = () => {
    setLoadTemplate('Clear Resume');
    setPersonalInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setSections({ educations: [], experiences: [] });
  }

  const onTemplateLoad = () => {
    setLoadTemplate('Load Template');
    setPersonalInfo(exampleData.personalInfo);
    setSections(exampleData.sections);
  }

  
  return (
    <div className="app p-8 bg-slate-50">
      <div className="flex md:flex-col py-4">
        <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        <TemplateLoader onClear={onClear} onTemplateLoad={onTemplateLoad} loadTemplate={loadTemplate} />
      </div>
    
   {
          selectedMenu === 'content' && (
      
      <div className="flex flex-col">
        <Personal
          onChange={handlePersonalInfoChange}
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />

        <div className="flex flex-col">
              <Education
                onChange={handleSectionChange}
                educations={sections.educations}
              />
              <Experiences
                onChange={handleSectionChange}
                experiences={sections.experiences}
              />
        </div>
      </div>
      )
    }
        


    </div>
  )
}

export default App
