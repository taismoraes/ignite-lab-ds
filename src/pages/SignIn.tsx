import axios from "axios";
import clsx from "clsx";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import Logo from "../assets/logo";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Link } from "../components/Link";
import { Text } from "../components/Text";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "eleven@strangerthings.com.br",
      password: "123456789",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div
      className={clsx(
        " bg-gray-900 h-screen w-screen flex flex-col items-center justify-center"
      )}
    >
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="sm" className="text-gray-400 mt-1">
          Faça o login e comece a usar!
        </Text>
      </header>
      {isUserSignedIn && <Text>Login realizado com sucesso!</Text>}
      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch w-full max-w-[280px] mt-10 gap-4 sm:max-w-[400px]"
      >
        <label htmlFor="email" className="gap-2 flex flex-col">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <Envelope />
            </Input.Icon>
            <Input.Input
              id="email"
              placeholder="Digite seu e-email"
              type="email"
            />
          </Input.Root>
        </label>
        <label htmlFor="password" className="gap-2 flex flex-col">
          <Text size="sm" className="font-semibold">
            Sua senha
          </Text>
          <Input.Root>
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Input
              id="password"
              placeholder="*********"
              type="password"
            />
          </Input.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>
        <Button className="mt-4" type="submit">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Link text="Esqueceu sua senha" />
        <Link text="Não possui conta? Crie uma agora!" />
      </footer>
    </div>
  );
}
