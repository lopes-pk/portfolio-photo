
export default function Cabecalho() {
  return (
    <header className="flex h-1/6 w-full justify-center ">
        <nav className="flex w-11/12 items-center justify-between font-primary text-yellow-300">
          <h2 className="text-3xl hover:cursor-pointer">Iarlyn</h2>
          <div className="mr-16  flex w-2/6 justify-between pr-8 text-lg">
            <p className="hover:cursor-pointer hover:text-yellow-500 ">portfólio</p>
            <p className="hover:cursor-pointer hover:text-yellow-500">região</p>
            <p className="hover:cursor-pointer hover:text-yellow-500">contato</p>
          </div>
        </nav>
      </header>
  )
}