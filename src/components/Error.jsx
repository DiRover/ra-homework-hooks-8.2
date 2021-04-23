import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Error(props) {
    const { url, opts } = props;
    const [error] = useJsonFetch(url, opts);
    return (
        <div className = "status-box">
            <h2>Error</h2>
            <div>{ error }</div>
        </div>
    );
};