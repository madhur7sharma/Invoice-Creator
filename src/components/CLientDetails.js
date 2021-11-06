export default function CLientDetails({clientName, clientAddress}) {
    return (
        <>
            <section className="mt-5">
                <h2 className="font-bold text-xl uppercase md:text-2xl">{clientName}</h2>
                <p className="text-1/2xl uppercase md:text-xl">{clientAddress}</p>
            </section>
        </>
    )
}
