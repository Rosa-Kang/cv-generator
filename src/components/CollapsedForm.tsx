type Props = {
    onClick: (val:any) => void;
    title: string;
    arrayName: string;
    hideForm: (val: any) => void;
    form:null
}

const CollapsedForm = (
    { onClick, title, arrayName, hideForm }: Props
) => {
    const { isHidden, id } = Props.form;
    return (
        <button
      className="collapsed-form section-form"
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{title}</p>
      <i
        className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"} eye`}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      ></i>
    </button>
    )
}

export default CollapsedForm
