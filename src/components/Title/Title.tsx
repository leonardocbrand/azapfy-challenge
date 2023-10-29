type TitleProps = {
  children: React.ReactNode
};

function Title({ children }: TitleProps) {
  return (
    <h1 className="font-sans text-3xl text-white my-10 font-bold">{ children }</h1>
  );
}

export default Title;
