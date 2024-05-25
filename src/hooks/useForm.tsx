import { useState, ChangeEvent, FormEvent } from "react";
import { HandlerSendForm } from "../actions/handler";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useForm = (initialValues: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Todos los campos son obligatorios. Por favor, llénelos antes de enviar.");
      // Limpia el mensaje de error después de 3 segundos
      setTimeout(() => setError(""), 3000);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setMessage("");

    if (!validateForm()) {
      setIsSending(false);
      return; // Detiene la ejecución si la validación falla
    }

    try {
      await HandlerSendForm(formData);
      setMessage("¡Mensaje enviado con éxito!");
      setTimeout(() => {
        setFormData(initialValues); // Limpia el formulario
        setMessage(""); // Limpia el mensaje de éxito
      }, 3000);
    } catch (error) {
      setError("Error al enviar el mensaje, por favor inténtelo de nuevo.");
      setTimeout(() => setError(""), 3000); // Limpia el mensaje de error después de 3 segundos
    } finally {
      setIsSending(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSending,
    message,
    error,
  };
};
