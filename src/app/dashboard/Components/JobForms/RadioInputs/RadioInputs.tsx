interface RadioProps {
  label: string;
}

const RadioInputs = ({ label }: RadioProps) => {
  return (
    <div className="flex items-center  gap-4 my-3">
      <input type="radio" id="radio-button" />
      <label>{label}</label>
    </div>
  );
};
export default RadioInputs;
