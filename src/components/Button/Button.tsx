type ButtonProps = {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset' | undefined

};

function Button({ children, type }: ButtonProps) {
  return (
    <button
      type={ type }
      className="
      text-white
      font-bold
      h-10
      rounded-lg
      bg-slate-700
      hover:opacity-80
      active:opacity-100
      my-2
      bg-gradient-to-tr from-[#4158D0] via-blue-400 via-46% to-slate-300
      "
    >
      { children }

    </button>
  );
}

export default Button;
