import Image from "next/image";
export default function Phone() {
  return (
    <>
      <Image
        src="/icon-phone.svg"
        alt="teléfono"
        height={28}
        width={28}
        priority
      />
      <a
        href="https://wa.me/5841403970399"
        className="text-indigo-800  underline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abre WhatsApp para enviar un mensaje al número +58-414-039-70399, se abrirá en una nueva pestaña"
      >
        +58-414-039-70399​
      </a>
    </>
  );
}
