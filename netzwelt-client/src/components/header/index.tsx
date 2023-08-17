export default function Header(){

    return(
    <header>
        <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    <img src="/quarta-logo-1.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"  />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Quarta</span>
                </a>                
            </div>
        </nav>
    </header>)
}