import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

type LoginFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

function LoginForm({ handleSubmit, handleChange }: LoginFormProps) {
  return (
    <form
      onSubmit={ handleSubmit }
      className="flex flex-col gap-6 text-gray-400"
    >
      <Input handleChange={ handleChange } name="user">
        Usuário
      </Input>
      <Input handleChange={ handleChange } name="password">
        Senha
      </Input>
      <Button type="submit">
        Entrar
      </Button>
    </form>
  );
}

export default LoginForm;
