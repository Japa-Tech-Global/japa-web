import { cva } from "class-variance-authority";

type intent = "primary" | "secondary" | "tertiary";

type ButtonVariantsProps = {
  intent?: Intent;
};

type ButtonProps = ButtonVariantsProps & {
  customClassNames?: string;
  children: React.ReactNode;
  [key: string]: any;
};
type ButtonVariantsFunction = (props: ButtonVariantsProps) => string;

const ButtonVariants: ButtonVariantsFunction = cva(
  "py-2 px-7 text-center rounded-md transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none",
  {
    variants: {
      intent: {
        primary:
          "bg-[#7D30EE] hover:bg-[#7D30EE] text-white border border-[#7D30EE] ",
        secondary:
          "bg-transparent hover:bg-[#7D30EE] text-black hover:text-white border border-black",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);
export default function Button({
  intent,
  customClassNames,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${ButtonVariants({ intent })} ${customClassNames}`}
      {...props}
    >
      {children}
    </button>
  );
}
