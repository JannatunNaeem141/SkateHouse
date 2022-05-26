import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-5 mt-14'>Make An Admin</h2>
            <div className="overflow-x-auto flex justify-center">
                <table className="table w-36 md:w-3/4  lg:w-1/2 text-center shadow-2xl">
                    <thead>
                        <tr>
                            <th className='bg-cyan-100'>Index</th>
                            <th className='bg-cyan-100'>Email</th>
                            <th className='bg-cyan-100'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;