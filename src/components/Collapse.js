export default function Collapse({setCollapse, setShowInvoice, clientName, status, totalamount, dueDate, paid, paymentDue, billCard}) {
  
    return (
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
            <div>
                <h3 className="font-bold uppercase tracking-wide text-2xl">Invoice</h3>
            </div>
            {
                billCard ?
                <>
                    <div>
                        <p className="uppercase tracking-wide text-xl">{clientName}</p>
                    </div>
                    <div className="flex flex-col items-center justify-between flex-wrap">
                        <p className="uppercase tracking-wide text-xm">Due Date</p>
                        <p className="uppercase font-bold tracking-wide text-xl">{dueDate}</p>
                        {
                            (paymentDue && paid) || (!paymentDue && paid) ?
                            null
                            :
                            paymentDue ?
                            null
                            :
                            <p className="font-bold tracking-wide text-1/2xl text-red-500">MISSED</p>
                        }
                    </div>
                    <div className="flex flex-col items-center justify-between flex-wrap">
                        <p className="uppercase tracking-wide text-xm">Bill Amount</p>
                        <p className="font-bold uppercase tracking-wide text-xl">₹{totalamount}</p>
                    </div>
                    <div>
                        {
                            paid ?
                            <p className="font-bold uppercase tracking-wide text-xl text-green-500 bg-green-100 rounded shadow py-1 px-3">{status}</p>
                            :
                            <p className="font-bold uppercase tracking-wide text-xl text-yellow-500 bg-yellow-100 rounded shadow py-1 px-3">{status}</p>
                        }
                    </div>
                </>
                :
                null
            }    
            <div>
                <ul className="flex items-center justify-between flex-wrap">
                    <li><button onClick={()=>(setShowInvoice(false), setCollapse(false))}><i className="far fa-edit text-xl text-blue-500"/></button></li>
                    <li className="mx-2"><button onClick={()=>(setShowInvoice(true), setCollapse(false))}><i className="fas fa-expand text-xl ml-8 text-gray-500"/></button></li>
                </ul>
            </div>
        </header>
    )
}
