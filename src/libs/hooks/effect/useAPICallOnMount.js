import { useEffect, useState } from 'react'

let apiStatus = {
    loading : "loading",
    complete : "complete",
    errored : "errored"
}

const useAPICallOnMount = (service) => {
    const [status, setStatus] = useState(apiStatus.loading);
    const [data, setData] = useState(null);

    useEffect(() => {
        service()
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                setData(res);
                setStatus(apiStatus.complete);
            })
            .catch(() => {
                setStatus(apiStatus.errored);
            });
        // eslint-disable-next-line
    },[]);

    return [status === apiStatus.loading, data, status === apiStatus.errored];
}

export default useAPICallOnMount