import { useRef, useState, useEffect } from "react";

const useObserverCustom = (opciones) => {
  const contenedorRef = useRef(null);
  const [esVisible, guardarVisible] = useState(false);

  const llamadoFuncion = (entries) => {
    const [entry] = entries;
    guardarVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(llamadoFuncion, opciones);
    if (contenedorRef.current) observer.observe(contenedorRef.current);

    return () => {
      if (contenedorRef.current) observer.unobserve(contenedorRef.current);
    };
  }, [contenedorRef, opciones]);
  return [contenedorRef, esVisible];
};
export default useObserverCustom;
