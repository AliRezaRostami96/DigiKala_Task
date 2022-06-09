
interface httpRequestParams {
    method: 'POST' | 'GET' | 'PATCH' | 'UPDATE' | 'DELETE',
    route: string,
    body?: Record<string, unknown> | FormData,
}


const HTTPRequest = async <T>({ method = 'GET', route = '/', body }: httpRequestParams,): Promise<T> => {
    
    const request = new Request(`https://api.digikala.com/v1${route}`, {
        method: method,
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    
    const apiRes: Response = await fetch(request);

    if (apiRes.status.toString().substr(0, 1) === '4' || apiRes.status.toString().substr(0, 1) === '5') {
        if (apiRes.status === 401) {
            if (typeof window !== 'undefined') {
                window.location.href = '/';
            }
        } else {
            const error = await apiRes.json();
            return Promise.reject(error);
        }
    }

    return apiRes.status === 204 ? apiRes : await apiRes.json();
};

export default HTTPRequest;