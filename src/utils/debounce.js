 export default (func, timeout = 300) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // eslint-disable-next-line no-invalid-this
            func.apply(this, args);
        }, timeout);
    };
}