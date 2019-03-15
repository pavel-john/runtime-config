/* global XMLHttpRequest */
import get from 'lodash/get';

const props = {
  method:'GET',
  headers: [{
    name: 'Content-Type',
    value: 'application/json;charset=UTF-8',
  }],
  relativeUrl: 'runtimeConfig',
  config: null,
  loadedlistener: null,
}


export const getRequest = () =>
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

// use with `await` for blocking call
// or in combination with `blockUntilLoaded` for asynchronous load
export const load = async () => {
  const result = await getRequest();
  props.config = JSON.parse(result);
  if (typeof props.loadedlistener === 'function') {
    props.loadedlistener();
  }
}

// we might want to trigger the downlad but not to wait for it so that it does not block
// loading and rendering the rest of the page until a config value is needed
// in that case, we call load, but not `await` it and `await blockUntilLoaded` when
// some stuff is displayed
export const blockUntilLoaded = () => new Promise(resolve => {
  props.loadedlistener = resolve;
});

export const read = name => get(config, name);
