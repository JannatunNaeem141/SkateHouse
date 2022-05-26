import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://thawing-tundra-73200.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })

            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully make an admin');
                }
            })
    }
    return (
        <tr>
            <th><small>{index + 1}</small></th>
            <td><small>{email}</small></td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:border-primary">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;