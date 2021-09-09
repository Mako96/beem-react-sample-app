import { useState } from "react";

const ApiTest = () => {

    const [phoneNumbers,setNumbers] = useState([
        {name: "Murtaza Babrawala", number:'8169014796',id:1},
        {name: "Fakhera Mamawala", number:'9594871093',id:2},
        {name: "Batul Babrawala", number:'8169401644',id:3}
    ])

    return ( 
        <div>
            <h2>Showing lists</h2>
            <div className = 'home'>
                {phoneNumbers.map((phoneNumbers) => (
                    <div className = "blog-preview" key={phoneNumbers.id}>
                    <h2>{phoneNumbers.name}</h2>
                    <p>Number = {phoneNumbers.number}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ApiTest;