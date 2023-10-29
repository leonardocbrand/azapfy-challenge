'use client';

import { Inputs } from '@/app/types';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useUserStore } from '@/store/user';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

function LoginForm() {
  const router = useRouter();
  const setUser = useUserStore(((state) => state.actions.setUser));
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setUser(data.login);
    router.push('/dashboard');
  };

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className="flex flex-col gap-6 text-gray-400"
    >
      <Input register={ register('login', { required: true }) } type="text">
        Usuário
      </Input>
      {errors.login && (
        <span className="text-[11px] text-red-400 ">Usuário é obrigatório</span>)}
      <Input
        register={ register('password', { required: true }) }
        type="password"
      >
        Senha
      </Input>
      {errors.password && (
        <span className="text-[11px] text-red-400 ">Senha é obrigatório</span>)}
      <Button type="submit">
        Entrar
      </Button>
    </form>
  );
}

export default LoginForm;
