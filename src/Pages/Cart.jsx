/* eslint-disable react/prop-types */

import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {

    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems);

    if (items.length === 0) {
        return (
            <div className="min-h-screen text-center">
                <h2 className="text-4xl font-bold mt-10 mb-20">Cart</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    const handleDelete = (id) => {
        // make sure
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/cart/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingItems = items.filter(item => item._id !== id);
                                setItems(remainingItems);

                                
                                console.log('deleted successfully');
                                Swal.fire(
                                    'Deleted!',
                                    'Your Coffee has been deleted.',
                                    'success'
                                )

                            }
                        })
                }
            })
    }


    // console.log(items);
    return (
        <div className="min-h-screen">
            <h2 className='text-4xl font-bold text-center mt-10 mb-20'>Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
                {
                    loadedItems.map(item => (
                        <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="w-[200px] h-[200px]" src={item.productImg} alt={item.productName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.productName}</h2>
                                <p> <span className="font-bold">Price: </span> ${item.price}</p>
                                <p> <span className="font-bold">Rating: </span> {item.rating}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-error text-white normal-case">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;
