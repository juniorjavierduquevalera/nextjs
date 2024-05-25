import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/junior-duque-logo.svg"
        alt="Junior Duque Logo"
        fill
        style={{
          objectFit: "contain",
        }}
      />
    </>
  );
}
