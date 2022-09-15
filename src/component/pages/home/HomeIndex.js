import React, { useState } from 'react';
import Layout from '../../../layout/Layout';



function HomeIndex() {

    const [accountCounter, setAccountCounter] = useState([
        { id: 1, account: "", accountOwner: "" },
        { id: 2, account: "hi", accountOwner: "" },
        { id: 3, account: "bu", accountOwner: "" }
    ]);

 
// accountCounter[2].account = "Sunil Kumar"


    const handleAccountCounter = (event, counter) => {
        setAccountCounter((prevAccountCounter) => {
            const newCounter = [...prevAccountCounter];
            newCounter[prevAccountCounter.indexOf(counter)][event.target.name] = event.target.value;
            return newCounter;
        });
    };


    const deleteAccount = (id) => {
        setAccountCounter((prevAccountCount) =>
            prevAccountCount.filter((item) => item.id !== id)
        );
    };



    return (
        <Layout>
            <div className="wrapper bg2_5 py-2 bordercolor2_4 border_bottom1">
                <div className="container"> <div className="cover fs-4 fw-bold">Home</div></div>
            </div>
            <div className='container'>
                {accountCounter.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                style={{border:"solid 1px #f00"}}
                                type="text"
                                value={item.account}
                                name="account"
                                onChange={(e) => handleAccountCounter(e, item)}
                            />
                        </td>
                        <td>
                            <input
                                 style={{border:"solid 1px #000"}}
                                type="text"
                                value={item.accountOwner}
                                name="accountOwner"
                                onChange={(e) => handleAccountCounter(e, item)}
                            />
                        </td>
                        <td>
                            <span onClick={() => deleteAccount(item.id)}>X</span>
                        </td>
                    </tr>
                ))}

            </div>
        </Layout>
    )
}

export default HomeIndex