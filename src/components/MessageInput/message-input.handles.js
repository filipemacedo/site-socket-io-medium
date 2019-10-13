import { sendMessage } from "../../socket/messages.socket";

/**
 * Fn responsável por enviar a mensagem
 * para o servidor
 * @param {string} message 
 * @param {Function} clear 
 */
export const handleSubmit = ({ message, clear }) => event => {
  event.preventDefault();

  sendMessage({ message });

  return clear();
};
