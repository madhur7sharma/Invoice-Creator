export default function MainDetails({name, address}) {
    return (
        <>
            <section className="flex flex-col items-end justify-end">
                <h2 className="font-bold text-2xl uppercase md:text-3xl">{name}</h2>
                <p className="text-1/2xl uppercase md:text-xl">{address}</p>
            </section>
        </>
    )
}
