import { twMerge } from "tailwind-merge";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  id: string;
  leftIcon?: any;
  rightIcon?: any;
}
export default function Button({
  title,
  leftIcon,
  className,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3",
        className,
      )}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general ">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
}
