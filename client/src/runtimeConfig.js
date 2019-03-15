/* global XMLHttpRequest */
import get from 'lodash/get';

// the module properties
const props = {
    // constant settings
    method: 'GET',
    headers: [{
        name: 'Content-Type',
        value: 'application/json;charset=UTF-8',
    }],
    relativeUrl: 'runtimeConfig',
    // variables
    config: {},
    loaded: false,
    loadedListeners: [],
}

// this just issues a standard XMLHttpRequest and returns a promise which
// resolves or reject based on request result
const getRequest = () =>
    new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                resolve(xmlhttp.responseText);
                return;
            }
            if (xmlhttp.status === 500) {
                reject(xmlhttp.responseText);
                return;
            }
            if (xmlhttp.status === 400) {
                reject(xmlhttp.responseText);
                return;
            }
        };
        xmlhttp.onerror = error => {
            reject({ status: xmlhttp.statusText, error });
            return;
        };
        xmlhttp.open(props.method, props.relativeUrl, true);
        for (const header of props.headers) {
            const { name, value } = header;
            xmlhttp.setRequestHeader(name, value);
        }
        xmlhttp.send();
    });

// starts loading and returns a promise which resolves when the load is finished
// you may or may not wait until it resolves, because the `read` function below
// waits for loading anyways
export const load = async () => {
    const result = await getRequest();
    props.config = JSON.parse(result);
    props.loaded = true;
    for (const listener of props.loadedListeners) {
        listener();
    }
};

// this creates a new promise which is resolved when configuration loads
const blockUntilLoaded = () => new Promise(resolve => {
    if (props.loaded) {
        resolve();
    } else {
        props.loadedListeners.push(resolve);
    }
});

// read a configuration
// we need to wait until it is loaded
export const read = async name => {
    await blockUntilLoaded();
    return get(config, name);
};
