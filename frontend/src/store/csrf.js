
export async function csrfFetch(url, options = {}) {
    options.method = options.method ||= 'GET';
    options.headers = options.headers ||= {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = 'appliation/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }

    const res = await fetch(url, options);
    return res;

}

