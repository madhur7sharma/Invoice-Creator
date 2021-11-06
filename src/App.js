import React,{useState} from "react";
import {v4 as uuidv4} from "uuid"
import Invoice from "./components/Invoice";

function App() {
  const [invoiceList , setInvoiceList] = useState([])

  
  const newInvoice = () => {
    const newBill = {
        id:uuidv4()
    }
    setInvoiceList([...invoiceList, newBill])
  }


  return(
    <>
      <main className="flex flex-row justify-center m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl">
        <button onClick={newInvoice} className="mt-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Create a New Invoice</button>
      </main>
      {invoiceList.map(({id}) => (
          <React.Fragment key={id}>
            <Invoice invoiceList={invoiceList} setInvoiceList={setInvoiceList} id={id}/>
          </React.Fragment>
      ))}
    </>
  )
}

export default App;