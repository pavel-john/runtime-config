import get from 'lodash/get';

export const read = name => get(__runtimeConfig, name); // eslint-disable-line no-undef
