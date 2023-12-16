
interface Props {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const ProductTextField = ({ name, value, onChange, placeholder }: Props) => (
    <input className="w-full" type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} required />
);

export default ProductTextField;
