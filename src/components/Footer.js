export default function Footer({name, email, website, phone, bankName, bankAccount}) {
    return (
        <>
            <footer className="footer border-t-2 border-gray-300 pt-5">
                <ul className="flex flex-wrap items-center justify-center">
                    <li><b>your name:</b> {name}&nbsp;&nbsp;</li>
                    <li><b>your email:</b> {email}&nbsp;&nbsp;</li>
                    <li><b>phone no:</b> {phone}&nbsp;&nbsp;</li>
                    <li><b>Bank:</b> {bankName}&nbsp;&nbsp;</li>
                    <li><b>Account holder:</b> {name}&nbsp;&nbsp;</li>
                    <li><b>Acc no.:</b> {bankAccount}&nbsp;&nbsp;</li>
                    <li><b>website:</b><a href={website}> {website}&nbsp;&nbsp;</a></li>
                </ul>
            </footer>
        </>
    )
}








// export default function Footer() {
//     return (
//         <div>
            
//         </div>
//     )
// }