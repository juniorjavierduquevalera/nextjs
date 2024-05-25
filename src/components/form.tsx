"use client";
import Image from "next/image";
import { useForm } from "../hooks/useForm";

export default function Form() {
  const { formData, handleChange, handleSubmit, isSending, message, error } =
    useForm({
      name: "",
      email: "",
      message: "",
    });
  return (
    <>
      <section className="text-gray-600 body-font relative main-bg">
        <div className="flex justify-center mt-5">
          <figure className="relative w-36 h-36">
            <Image
              src="/junior-duque-logo.svg"
              alt="Junior Duque Logo"
              layout="fill"
              style={{
                objectFit: "contain",
              }}
            />
          </figure>
        </div>
        <form onSubmit={handleSubmit} className="container px-5 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <div className="rounded border w-full md:w-2/3 lg:w-1/2 mx-auto border-green-700 mb-5">
              <h2 className="sm:text-3xl text-2xl font-semibold title-font my-4 text-gray-900">
                Contacto
              </h2>
            </div>
            <p className="lg:w-2/4 md:w-2/3 mx-auto leading-relaxed text-base text-left">
              🔥 ¿Listo para llevar tu sitio web al siguiente nivel? 👉
              <strong>¡Contáctame llena el formulario!</strong> 📈 Incrementa tu
              visibilidad en buscadores y mejora la experiencia de usuario de tu
              sitio hoy
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nambre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="w-full md:w-auto flex mx-auto justify-center text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg"
                  disabled={isSending}
                >
                  {isSending ? "Enviando..." : "Enviar"}
                </button>
                {message && (
                  <p className="text-center text-green-700 font-bold mt-3">
                    {message}
                  </p>
                )}
                {error && (
                  <p className="text-center text-red-500 font-bold mt-3">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
