import React from "react"

export default function Table({list, totalamount, status, method, paid}) {
    return (
        <>
            <table width="100%" className="mt-10 mb-10">
                <thead>
                    <tr className="bg-gray-100 ">
                        <td className="font-bold text-xs md:text-base">Item Description</td>
                        <td className="font-bold text-xs md:text-base">Quantity</td>
                        <td className="font-bold text-xs md:text-base">Price</td>
                        <td className="font-bold text-xs md:text-base">Amount</td>
                    </tr>
                </thead>
                {list.map(({id, description, quantity, price, amount}) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className="flex item-end justify-end text-gray-700 text-xl font-bold uppercase md:text-2xl">Total Amount: ₹ {totalamount.toLocaleString()}</h2>
                {paid ?
                    <h3 className="flex item-end justify-end text-gray-700 text-1/2xl font-bold uppercase">Amount {status} through {method}</h3>
                :
                    <h3 className="flex item-end justify-end text-gray-700 text-1/2xl font-bold uppercase">Amount {status}</h3>
                }

            </div>
        </>
    )
}
