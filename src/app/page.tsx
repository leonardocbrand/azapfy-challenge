import { Title } from '@/components/Title';
import Image from 'next/image';
import { LoginForm } from './components/LoginForm';
import heroesImg from '../../public/heroes.jpg';

export default function Home() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main
      className="
    bg-gradient-to-br
    from-zinc-900
    to-zinc-800
    w-screen
    h-screen
    flex
    justify-center
    items-center"
    >
      <section className="md:w-1/2 h-[500px] bg-zinc-950 rounded-3xl flex items-center">
        <section
          className="
        basis-full
        md:basis-5/12
        flex
        flex-col
        text-white
        items-center
        px-10
        pb-10"
        >
          <Title>
            Faça o seu login
          </Title>
          <LoginForm />
        </section>
        <Image
          src={ heroesImg }
          alt="Imagem de super-heróis dos quadrinhos"
          className="w-0 md:w-7/12 h-full bg-cover rounded-r-3xl"
        />
      </section>
    </main>
  );
}
