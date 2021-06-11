import axios from 'axios';
import { useState, useEffect } from 'react';

function Admin() {

    const [objectData, setObjectData] = useState({});
    console.log('Object Data is:', objectData);

    const getOrders = () => {
        console.log('In getOrder');
        // ⬇ Axios GET call to DB:
        axios.get('/api/order')
            .then(response => {
                console.log('In GET /api/order:', response.data);
                setObjectData({
                    name: response.data.customer_name,
                    time: response.data.time,
                    type: response.data.type,
                    total: response.data.total
                })
            }) // End .then
            .catch(error => {
                console.log('In GET /api/order:', error);
            }); // End .catch
    } // End getOrders

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <>
            <h1>Prime Pizza Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{objectData.name}</td>
                        <td>{objectData.time}</td>
                        <td>{objectData.type}</td>
                        <td>{objectData.total}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Admin;