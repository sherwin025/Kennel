import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";


export const CustomerList =() => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <section className="customers">
            {
                customers.map(customer =>{
                    return (
                        <div className="customer" key={`customer--${customer.id}`}>
                            <div className="customer_name">
                                Name: {customer.name}
                            </div>
                            <div className="customer_address">
                                Address: {customer.address}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )

}