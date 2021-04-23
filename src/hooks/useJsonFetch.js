import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${url}${opts}`);
                const info = await response.json();
                setData(info.status);
                if (!response.ok) {
                    setError(info.status)
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return ;
    }, [url, opts]);

    return [data, loading, error];
}
