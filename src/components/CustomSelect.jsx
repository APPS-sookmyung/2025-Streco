import Select from "react-select";
import "./CustomSelect.css";

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  isDisabled,
}) => {
  return (
    <Select
      className="custom-select"
      classNamePrefix="custom-select"
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isDisabled={isDisabled}
    />
  );
};

export default CustomSelect;
