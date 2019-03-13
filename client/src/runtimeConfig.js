import get from 'lodash/get';

const CONFIG = __runtimeConfig; // eslint-disable-line no-undef
export const read = name => get(CONFIG, name);
