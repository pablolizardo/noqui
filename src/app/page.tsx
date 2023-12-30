/* eslint-disable @next/next/no-img-element */
import Logo from "./logo";

export default function Home() {
  return (
    <>
      <img src="/logo.svg" className="mx-auto max-w-lg" alt="Plato de ñoquis" />
      {/* <Logo /> */}
      <p className="text-center ">
        Ayuda a mejorar la eficiencia del Estado argentino denunciando a los{" "}
        <strong>ñoquis</strong>.
        <br />
        Todas las denuncias son anonimas. No constituyen una denuncia real.
      </p>
    </>
  );
}
