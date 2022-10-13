import { Envelope, Lock } from 'phosphor-react';
import {
  Button,
  Checkbox,
  Heading,
  Logo,
  Text,
  TextInput,
} from '../components';

export function SignIn() {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900 items-center justify-center text-zinc-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-zinc-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-zinc-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          size="sm"
          className="text-zinc-400 underline hover:text-zinc-200"
          asChild
        >
          <a href="">Não tem uma conta?</a>
        </Text>

        <Text
          size="sm"
          className="text-zinc-400 underline hover:text-zinc-200"
          asChild
        >
          <a href="">Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  );
}