import React, {useEffect, useState} from 'react'
import axios from "axios";

const useFetchDataComponent = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get('/api/dishes');
                setData(response.data);
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
};

export default useFetchDataComponent;
