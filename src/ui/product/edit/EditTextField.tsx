
interface Props {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const TextFieldComponent = ({ name, value, onChange, placeholder }: Props) => (
    <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
);

export default TextFieldComponent;
