import io from "./main-socket";

/**
 * Fn responsável por remover o listener
 * para usarmos quando o ciclo de vida
 * do componente reiniciar
 */
export const removeWriteMessageListener = () =>
  io.removeListener("write message");

/**
 * Fn responsável por criar um listener
 * ouvindo o evento "write message"
 * quando o listener escutar o evento
 * será executado o cb
 * 
 * @param {Function} cb 
 */
export const onWriteMessage = cb => io.on("write message", cb);

/**
 * Fn responsável por emitir
 * o evento "send message"
 * 
 * @param {string} message 
 */
export const sendMessage = ({ message }) => io.emit("send message", message);
