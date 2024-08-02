import { useEffect, useState } from "react"

export const UseFetchAndLoad = () => {
    const [loading, setLoading] = useState(false);
    let controller: AbortController;

    const callEndPoint = async <T>(axiosCall: Promise<T>) => {
        setLoading(true);
        try {
            const response = await axiosCall.then((res) => res);
            setLoading(false);
            return response;
        } catch (error) {
            setLoading(false);
            controller.abort();
            throw error;
        };
    };

    return { callEndPoint, loading };
};

export const UseAsync = <T>(
    asyncFn: () => Promise<T[]>,
    set: React.Dispatch<React.SetStateAction<any[]>>,
    adapter: (adapter: any[]) => T[],
    dependencies: any[] = []
) => {

    useEffect(() => {

        let isActive = true;
        asyncFn().then((result) => {
            if (isActive) set(adapter(result));
        }).catch((er) => { console.log(er) });
        return () => {
            isActive = false;
        };
    }, dependencies);
};