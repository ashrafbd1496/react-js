import React from 'react';
import './style.css';

const users = [
    {
        fullName: 'Ashraf',
        age: 32,
        phones: [
            { home: '01558917333' },
            { office: '01911967727' }
        ]
    },
    {
        fullName: 'Sumit',
        age: 30,
        phones: [
            { home: '01458955' },
            { office: '0215489' }
        ]
    },
];

const NestedMapping = () => {
    return (
        <div>
            <h1>Nested List</h1>
            {users.map((user, userIndex) => (
                <article key={userIndex}>
                    <h3>{user.fullName}</h3>
                    <p>{user.age}</p>
                    {user.phones.map((phone, phoneIndex) => (
                        <div key={phoneIndex}>
                            {phone.home && <p>Home: {phone.home}</p>}
                            {phone.office && <p>Office: {phone.office}</p>}
                        </div>
                    ))}
                </article>
            ))}
        </div>
    );
}

export default NestedMapping;
