import {useSelector} from 'react-redux'

function Admin () {

    // const orderList = useSelector(store. store. ADD REDUCER HERE)

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
                    {/* {orderList.map((order, i) => {
                        return (
                        <tr key={i}>
                            <td>{order.name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.cost}</td>
                        </tr>)
                        })} */}
                </tbody>
            </table>
        </>
    )
}

export default Admin;