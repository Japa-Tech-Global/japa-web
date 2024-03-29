export const Inputs = ({ label, type, placeholder }) => {
  return (
    <div>
      <label className="text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-none w-full bg-white rounded-md py-3"
      />
    </div>
  );
};

export const Select = ({ label, defaultValue }) => {
  return (
    <div>
      <label className="text-white">{label}</label>
      <select className="border-none w-full bg-white rounded-md">
        <option defaultValue="Job categgory">{defaultValue}</option>
      </select>
    </div>
  );
};
