export default function Dates({invoiceNumber, invoiceDate, dueDate, paid, paymentDue}) {
    return (
        <>
            <article className="my-5 flex items-end justify-end">
                <ul>
                    <li className="p-1"><span className="font-bold">Invoice Number:&nbsp;</span>{invoiceNumber}</li>
                    <li className="p-1"><span className="font-bold">Invoice Date:&nbsp;</span>{invoiceDate}</li>
                    <li className="p-1"><span className="font-bold">Due Date:&nbsp;</span>{dueDate}</li>
                    {
                        (paymentDue && paid) || (!paymentDue && paid) ?
                        null
                        :
                        paymentDue ?
                        null
                        :
                        <li className="p-1"><span className="font-bold tracking-wide text-1/2xl text-red-500">MISSED</span></li>
                    }
                </ul>
            </article> 
        </>
    )
}
