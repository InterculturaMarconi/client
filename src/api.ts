const API_ROUTE = (path: string) => `https://pctomarconi.altervista.org${path}`;

type ApiMethod = (path: `/${string}`, body?: BodyInit) => Promise<Response>;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const DEFAULT_CONFIG = (method: Method): RequestInit => ({
    method,
    headers: {
        'X-Authorization': `${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

const get: ApiMethod = (path, body?) =>
    fetch(API_ROUTE(path), {
        body,
        ...DEFAULT_CONFIG('GET'),
    });

const post: ApiMethod = (path, body?) =>
    fetch(API_ROUTE(path), {
        body,
        ...DEFAULT_CONFIG('POST'),
    });

const put: ApiMethod = (path, body?) =>
    fetch(API_ROUTE(path), {
        body,
        ...DEFAULT_CONFIG('PUT'),
    });

const del: ApiMethod = (path, body?) =>
    fetch(API_ROUTE(path), {
        body,
        ...DEFAULT_CONFIG('DELETE'),
    });

export default { get, post, put, del };
