import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  children: React.ReactNode
  type: string
  register: UseFormRegisterReturn
};

function Input({ children, type, register }: InputProps) {
  return (
    <label className="flex flex-col group h-16">
      { children }
      <input
        { ...register }
        type={ type }
        className="
        h-10
        bg-zinc-800
        rounded-lg
        p-2
        outline-none
        appearance-none
        focus:border-2
        focus:border-blue-100
        "
      />
    </label>
  );
}

export default Input;
