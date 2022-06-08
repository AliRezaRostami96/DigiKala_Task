import { convertToEnDigit } from "./services";

interface httpRequestParams {
    method: 'POST' | 'GET' | 'PATCH' | 'UPDATE' | 'DELETE',
    route: string,
    body?: Record<string, unknown> | FormData,
}


const HTTPRequest = async <T>({method = 'GET', route = '/', body}: httpRequestParams,): Promise<T> => {
    const request = new Request(`https://www.digikala.com${route}`, {
        method: method,
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
        },
        body: body instanceof FormData ? body : convertToEnDigit(JSON.stringify(body)),
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