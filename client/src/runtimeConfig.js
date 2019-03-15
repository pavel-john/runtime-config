/* global XMLHttpRequest */
import get from 'lodash/get';

const props = {
  method: 'GET',
  headers: [{
    name: 'Content-Type',
    value: 'application/json;charset=UTF-8',
  }],
  relativeUrl: 'runtimeConfig',
  config: {},
}

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
export const load = async () => {
  const result = await getRequest();
  props.config = JSON.parse(result);
}

export const read = name => get(config, name);
