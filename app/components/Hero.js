export function Hero() {
    return (
        <section className="flex justify-center items-center w-full">
            <div className="flex-col gap-3">
                <h1 className="font-extrabold text-4xl">Oi, Meu nome é <br/> victor alves</h1>
                <div className="flex gap-1">
                    <a href="#" className="bg-zinc-400 p-2">Contact-me</a>
                    <a href="#" className="bg-zinc-400 p-2">Curriculo</a>
                </div>
            </div>
        </section>
    )
}