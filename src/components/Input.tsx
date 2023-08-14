type Props = {
    id: string;
    placeholder: string;
    type: string;
    labelText: string;
    value: string;
    onChange: (val: any) => void;
    dataKey: string;
}

const Input = ({id, placeholder, type, labelText, onChange, value,dataKey}: Props) => {
    return (
        <div className="inputs pt-2">
            <label htmlFor={id} className="font-semibold">
               {labelText}
            </label>
            <br className="mb-4"></br>
            { type === "textarea" ? 
                (
                <textarea
                    className="bg-gray-200 rounded-lg py-1 px-4 mb-4"
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                >

                </textarea>
            ) 
            : 
            (
            <input
                className="bg-gray-200 rounded-lg py-1 px-4 mb-4"
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                data-key={dataKey}
                />
        )
            }
        </div>
    )
}

export default Input
