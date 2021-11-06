import React, { useState, useEffect } from "react";
import CLientDetails from "./CLientDetails";
import Collapse from "./Collapse";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import {RiDeleteBin6Fill} from "react-icons/ri"

function Invoice({invoiceList, setInvoiceList, id}) {
  const [showInvoice, setShowInvoice] = useState(true)
  const [collapse, setCollapse] = useState(true)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("") 
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [totalamount, setTotalAmount] = useState(0)
  const [status, setStatus] = useState("pending")
  const [method, setMethod] = useState("")
  const [paid, setPaid] = useState(false)
  const [list, setList] =useState([])
  const [billCard, setBillCard] = useState(false)
  

  const handlePrint = () => {
    window.print()
  }

  const handlePaid = () => {
    if(status === "pending" || status === "")
    {
      setPaid(true)
    }
    else
    {
      setMethod("")
      setPaid(false)
    }
  }

  //Detele Invoice
  const deleteBill = (id) => setInvoiceList(invoiceList.filter((row) => row.id !== id ))


  //Alert for Missed Payments
  const [paymentDue, setPaymentDue] = useState(false)
  const current = new Date(); 
  const dateBig = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  const dateSmall = `${current.getFullYear()}-${current.getMonth()+1}-0${current.getDate()}`;
  useEffect(() => {
      console.log(paid);
      if((dueDate == dateBig || dueDate == dateSmall))
      {
          setPaymentDue(true)
      }
      else
      {
          setPaymentDue(false)
      }

      let dateString = ""
      for(let i = 8; i < 10; i++)
      {
          dateString += dueDate[i];
      }
      if( (parseInt(current.getDate()) <= parseInt(dateString))  ||  (parseInt(`0${current.getDate()}`) <= parseInt(dateString)) )
      {
          setPaymentDue(true)
      }
      else
      {
          setPaymentDue(false)
      }
  }, [dueDate])


  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      {collapse ? 
          <Collapse setCollapse={setCollapse} setShowInvoice={setShowInvoice} clientName={clientName} amount={amount} status={status} totalamount={totalamount} dueDate={dueDate} paid={paid} paymentDue={paymentDue} billCard={billCard}/>
        :
        showInvoice ? 
        (
          <div>
            <Header handlePrint={handlePrint}/>
            <MainDetails name={name} address={address}/>
            <CLientDetails clientName={clientName} clientAddress={clientAddress}/>   
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} paid={paid} paymentDue={paymentDue}/>        
            <Table list={list} setList={setList} totalamount={totalamount} setTotalAmount={setTotalAmount} status={status} method={method} paid={paid}/>
            <Notes notes={notes}/>
            <Footer name={name} email={email} website={website} phone={phone} bankName={bankName} bankAccount={bankAccount}/>
            <button onClick={()=>(setShowInvoice(false), setCollapse(false))} className="mt-5 bg-blue-500 text-white font-bold py-2 px-6 md:px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Invoice</button>
            <button onClick={()=>setCollapse(true)} className="mt-5 ml-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Collapse</button>
          </div>
        )
        :
        (
          <>
            <div className="flex flex-col justify-center">
              
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Name</label>
                  <input type="text" name="text" id="name" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter Address</label>
                  <input type="text" name="address" id="address" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
              </article>


              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter Email</label>
                  <input type="text" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>


                <div className="flex flex-col">
                  <label htmlFor="website">Enter Website</label>
                  <input type="url" name="website" id="website" placeholder="Enter Website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
                </div>


                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Phone</label>
                  <input type="text" name="phone" id="phone" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
              </article>


              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientname">Enter Client Name</label>
                  <input type="clientname" name="clientname" id="clientname" placeholder="Enter Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                </div>


                <div className="flex flex-col">
                  <label htmlFor="clientaddress">Enter Client Address</label>
                  <input type="text" name="clientaddress" id="clientaddress" placeholder="Enter Client Address" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}/>
                </div>
              </article>

              
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Invoice Number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
                </div>


                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Invoice Date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}/>
                </div>


                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input type="date" name="dueDate" id="dueDate" placeholder="Invoice Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                </div>
              </article>


              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bank">Enter Bank Name</label>
                  <input type="text" name="bank" id="bank" placeholder="Enter Bank Name" value={bankName} onChange={(e) => setBankName(e.target.value)}/>
                </div>


                <div className="flex flex-col">
                  <label htmlFor="bankaccount">Enter Bank Accout Number</label>
                  <input type="text" name="bankaccount" id="bankaccount" placeholder="Enter Bank Accout Number" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}/>
                </div>
              </article>


              <article>
                <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} totalamount={totalamount} setTotalAmount={setTotalAmount}/>
              </article>


              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col mt-10">
                  <label htmlFor="status">Payment Status</label>
                  <select name="status" id="status" value={status} onChange={(e) => (setStatus(e.target.value), handlePaid())}>
                    <option value="pending">PENDING</option>
                    <option value="paid">PAID</option>
                  </select>
                </div>
                {
                  paid ? 
                  <div className="flex flex-col md:mt-10">
                  <label htmlFor="method">Payment Method</label>
                  <select name="method" id="status" value={method} onChange={(e) => setMethod(e.target.value)}>
                    <option value="select">Select Payment Method</option>
                    <option value="card">CARD</option>
                    <option value="upi">UPI</option>
                    <option value="cash">CASH</option>
                  </select>
                </div>
                :
                null
                }
              </article>


              <label htmlFor="notes">Additional Notes</label>
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

              <button onClick={()=>(setShowInvoice(true), setCollapse(false), setBillCard(true))} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Finish</button>
              
            </div>
          </>
        )
      }
      {
        collapse ?
        <button onClick={()=>deleteBill(id)}><RiDeleteBin6Fill className="text-2xl text-red-500"/></button>
        :
        <button className="bg-red-500 text-white font-bold py-2 px-5 mt-5 rounded shadow border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300" onClick={()=>deleteBill(id)}>Delete Invoice</button>
      }
    </main>
  );
}

export default Invoice;