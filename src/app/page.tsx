import Cabecalho from "@/components/Cabecalho";
import Capa from "@/components/Capa";
import Categorias from "@/components/Categorias";
import Contato from "@/components/Contato";
import Portfolio from "@/components/Portfolio";
import Regiao from "@/components/Regiao";



export default function Home() {


  return (
    <main className="h-screen w-full bg-gray-800">
      <Cabecalho />
      <Capa />
      <Categorias />
      <Portfolio />
      <Regiao />
      <Contato />
      <footer className="bg-gray-600">
        <h3 className="p-12 text-center font-secundary text-lg text-yellow-300">© copyright todos direitos reservados</h3>
      </footer>
    </main >
  )
}
