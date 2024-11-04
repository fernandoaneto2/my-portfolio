import Image from "next/image";
import "./globals.css"
import Topo from "@/app/Componentes/Topo/topo";
import Cabecalho from "./Componentes/Cabecalho/cabecalho";


export default function Home() {
  return (
    <main>
      <Cabecalho/>
      <Topo/>
    </main>
  );
}
