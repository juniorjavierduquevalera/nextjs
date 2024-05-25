import Image from "next/image";
export default function Email() {
  return (
    <>
      <Image
        src="/icon-email.svg"
        alt="email"
        height={28}
        width={28}
        priority
      />
      <a
        href="mailto:juniorjavierduquevalera@gmail.com"
        className="text-indigo-800 underline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Envía un correo electrónico a juniorjavierduquevalera@gmail.com, se abrirá en tu cliente de correo predeterminado"
      >
        juniorjavierduquevalera@gmail.com
      </a>
    </>
  );
}
