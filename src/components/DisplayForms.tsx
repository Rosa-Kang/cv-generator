import CollapsedForm from "./CollapsedForm";

type Props = {
    forms:any;
  onChange:(val:any)=> void;
  onCancel:(val:any)=> void;
  toggleCollapsed:(val:any)=> void;
  onHide:(val:any)=> void;
  onRemove:(val:any)=> void;
  FormComponent:any;
  titleKey:string;
  arrayName:string;
}


function DisplayForms({
  forms,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
  FormComponent,
  titleKey,
  arrayName,
}: Props) {
  return (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <CollapsedForm
            form={form}
            onClick={toggleCollapsed}
            title={form[titleKey]}
            arrayName={arrayName}
            hideForm={onHide}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            cancel={onCancel}
            save={toggleCollapsed}
            remove={onRemove}
          />
        )
      )}
    </div>
  );
}

export default DisplayForms;