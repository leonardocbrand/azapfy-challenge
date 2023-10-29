type InputProps = {
  children: React.ReactNode
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
};

function Input({ children, handleChange, name }: InputProps) {
  return (
    <label className="flex flex-col group h-16">
      { children }
      <input
        onChange={ handleChange }
        name={ name }
        type="text"
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
