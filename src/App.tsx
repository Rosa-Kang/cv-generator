import { useState } from "react"
import Navbar from "./components/navbar/Navbar";
import TemplateLoader from "./components/templateLoader/TemplateLoader";
import exampleData from "./example-data";
import Personal from "./components/personal/Personal";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";

useState
function App() {
  const [selectedMenu, setSelectedMenu] = useState('content');
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [loadTemplate, setLoadTemplate] = useState('Load Template');

  const [sectionOpen, setSectionOpen] = useState(null);
    // Store prevState to revert changes when user clicks "cancel"
  const [prevState, setPrevState] = useState(null);


  const handleSectionChange = (e:any) => {
    const { key } = e.target.dataset;
    const inputVal = e.target.value;
    const form = e.target.closest('.section-form');
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj: any) => {
        if (obj.id === id) obj[key] = inputVal;
        return obj;
      })
    })
  }

  const createForm = (arrayName:string, obj:object) => {
    setPreventState(null);
    const section = structuredClone(sections[arrayName]);
    section.push(obj);
    setSections({...sections, [arrayName]: section})
  }

  const createEducationForm = () => {
    createForm('educations', {
      degree: '',
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    })
  }

  const handlePersonalInfoChange = (e:any) => {
    const { key } = e.target.dataset;
    console.log({ key });
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

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  const removeForm = (e:any) => {
    const form = e.target.closest('.section-form');
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item)=> item.id !== id),
    })
  }

  const cancelForm = (e:any) => {
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest('section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      })
    })
  }

  const toggleValue = (e, key:any)=>{
    const sectionForm = e.target.closest('.section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }
        return form;
      })
    })
   }
  
  const toggleCollapsed = (e) => toggleValue(e, 'isCollapsed');
  const toggleHidden = (e) => toggleValue(e, 'isHidden');
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

        <div className="flex md:flex-col">
              <Education
                educations={sections.educations}
                isOpen={sectionOpen === "Education"}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
          <Experience />
        </div>
      </div>
      )
    }
        


    </div>
  )
}

export default App
