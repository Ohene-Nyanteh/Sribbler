import { FileMenu } from "./Components";

function Menu() {
    return (
        <header className="h-16 bg-zinc-100 dark:bg-zinc-800 flex flex-col w-full">
            <section className="flex gap-2 px-4 border-b-[1px] border-b-gray-500 dark:border-b-gray-200 py-[0.5]
            ">
                <FileMenu />
            </section>
            <section className="flex gap-2"></section>
        </header>
    )           
}

export default Menu;