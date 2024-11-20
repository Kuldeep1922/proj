import React, { useEffect, useState } from 'react';

function Appp() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/data') // Replace with your backend endpoint
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Frontend</h1>
            <p>{data ? data.message : 'Loading...'}</p>
        </div>
    );
}

export default Appp;
