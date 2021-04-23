import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Loading(props) {
    const { url, opts } = props;
    const [loading] = useJsonFetch(url, opts);
    return (
        <div className = "status-box">
            <h2>Loading</h2>
            <div>{loading !== 'ok' && <p>Loading...</p>}</div>
        </div>
    );
}
