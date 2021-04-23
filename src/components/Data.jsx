import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data(props) {
    const { url, opts } = props;
    const [data] = useJsonFetch(url, opts);
    return (
        <div className = "status-box">
            <h2>Data</h2>
            <p>{ data }</p>
        </div>
    );
}
//{ loading ? null : <p>{ data.status }</p> }