import Switch from "@/components/Switch";

type Props = {
    onClear: () => void;
    onTemplateLoad: () => void;
    loadTemplate: string
}

const TemplateLoader = ({onClear, onTemplateLoad, loadTemplate}: Props) => {
    return (
        <div className="template-loader">
            <Switch onClick={onClear} loadTemplate={loadTemplate}>Clear Resume</Switch>
            <Switch onClick={onTemplateLoad} loadTemplate={loadTemplate}>Load Template</Switch>
        </div>
    )
}

export default TemplateLoader
