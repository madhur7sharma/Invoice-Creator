import React, { useEffect, useState } from "react"
import {v4 as uuidv4} from "uuid"
import {AiFillDelete} from "react-icons/ai"
import {FaRegEdit} from "react-icons/fa"

export default function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList, totalamount, setTotalAmount}) {

    const [edit, setEdit] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        const newItems = {
            id:uuidv4(),
            description,
            quantity,
            price,
            amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setEdit(false)
    }

    useEffect(() => {
        let rows = document.querySelectorAll(".amount")
        let sum = 0
        if(rows.length >= 1)
        {
            for(let i = 0; i < rows.length; i++)
            {
                if(rows[i].className === "amount")
                {
                    sum += isNaN(sum += rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                    setTotalAmount(sum)
                }
            }
        }
        else
        {
            setTotalAmount(0)
        }
    })

    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(quantity * price)  
        }
        calculateAmount(amount)
    }, [amount, price, quantity, setAmount])


    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setEdit(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
        
    }

    const deleteRow = (id) => setList(list.filter((row) => row.id !== id )) 

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:mt-16">
                    <label htmlFor="itemdescription">Enter Item Description</label>
                    <input type="text" name="itemdescription" id="itemdescription" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/> 
                </div>

                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Enter Quantity</label>
                        <input type="text" name="quantity" id="quantity" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/> 
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="price">Enter Item Price</label>
                        <input type="text" name="price" id="price" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}/> 
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="amount">Enter Amount</label>
                        <p>{amount}</p>
                    </div>
                </div>
                <button type="submit" className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">{edit ? "Edit List Item" : "Add Item"}</button>
            </form>

            <table width="100%" className="mb-10">
                <thead>
                    <tr className="bg-gray-100 ">
                        <td className="font-bold text-xs md:text-base">Item Description</td>
                        <td className="font-bold text-xs md:text-base">Quantity</td>
                        <td className="font-bold text-xs md:text-base">Price</td>
                        <td className="font-bold text-xs md:text-base">Amount</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                {list.map(({id, description, quantity, price, amount}) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td className="tableItems">{description}</td>
                                <td className="tableItems">{quantity}</td>
                                <td className="tableItems">{price}</td>
                                <td className="amount">{amount}</td>
                                <td className="tableItems"><button onClick={()=>(editRow(id), deleteRow(id))}><FaRegEdit/></button></td>
                                <td className="tableItems"><button onClick = {()=>deleteRow(id)}><AiFillDelete/></button></td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className="flex item-end justify-end text-gray-700 text-2xl font-bold">Total Amount: ₹ {totalamount.toLocaleString()}</h2>
            </div>
        </>
    )
}
