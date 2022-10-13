import { Envelope, Lock, User } from 'phosphor-react';
import {
  Button,
  Checkbox,
  Heading,
  Logo,
  Text,
  TextInput,
} from '../components';

export function SignUp() {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900 items-center justify-center text-zinc-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-zinc-400 mt-1">
          Crie uma conta e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10">
        <label htmlFor="name" className="flex flex-col gap-3">
          <Text className="font-semibold">Seu nome</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input id="name" type="name" placeholder="John Doe" />
          </TextInput.Root>
        </label>

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
            aceito os termos de uso
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
