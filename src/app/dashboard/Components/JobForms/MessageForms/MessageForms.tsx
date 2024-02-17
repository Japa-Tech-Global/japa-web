interface TextAreaProps {
  label: string;
  subtext: string;
}

const MessageBox = ({ label, subtext }: TextAreaProps) => {
  return (
    <div>
      <label className="text-sm text-black">{label}</label>
      <p className="text-sm text-gray-200 my-2">{subtext}</p>
      <textarea className="py-3 px-2 h-[100px] border rounded-md my-4" />
    </div>
  );
};
export default MessageBox;
