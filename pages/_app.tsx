import "@/styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import AOS from "aos";

const initAOS = () => {
  AOS.init({
    duration: 200, // Duración de la animación (en milisegundos)
    easing: "ease-in-out", // Curva de la animación
    delay: 1000, // Retraso antes de que comience la animación (en milisegundos)
    once: true, // Si es true, la animación solo se ejecutará una vez
    mirror: false, // Si es true, la animación se reproducirá en reversa cuando se desplaza hacia arriba
  });
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
