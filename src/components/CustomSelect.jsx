import Select from "react-select";
import "./CustomSelect.css";

const CustomSelect = ({ options, value, onChange, placeholder }) => {
  return (
    <Select
      className="custom-select"
      classNamePrefix="custom-select"
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CustomSelect;
