import path from 'path';
import convict from 'convict';

const props = {
  config: null,
  publicConfig: {},
};

// Define a schema
const schema = {
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "production",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8080,
    env: "PORT",
    arg: "port",
    public: true,
  },
  client: {
    value1: {
      doc: "Client value 1.",
      format: "String",
      default: "I'm value 1.",
      env: "CLIENT_VALUE_1",
      public: true,
    },
    value2: {
      doc: "Client value 2.",
      format: "String",
      default: "I'm value 2.",
      env: "CLIENT_VALUE_2",
      public: true,
    }
  },
  value3: {
    doc: "Value 3.",
    format: "String",
    default: "I'm value 3 - private.",
    env: "CLIENT_VALUE_3",
    public: false,
  }
};


const selectPublic = (node, address = []) => {
  // is the current node a leave (no descendants with public variables)?
  let leave = true;
  // resulting object after filtering out private variables
  const filtered = {};

  for (let key in node) {
    if (node.hasOwnProperty(key) && typeof node[key] === 'object') {
      // recurrent call
      const child = selectPublic(node[key], [...address, key]);
      if (child != null) {
        leave = false;
        filtered[key] = child;
      }
    }
  }

  // if the subtree is a leave
  if (leave) {
    // if it is a public variable, return value, return null otherwise
    return (node.public === true) ? props.config.get(address.join('.')) : null;
  } else {
    // return subtree containing only public variables
    return filtered;
  }
}

export const init = configDirPath => {
  // Use config schema
  props.config = convict(schema);
  // Load environment dependent configuration
  const env = props.config.get('env');
  const configPath = path.join(configDirPath, `${env}.json`);
  console.log(`Using config file: ${configPath}`);
  props.config.loadFile(configPath);
  // Perform validation
  props.config.validate({ allowed: 'strict' });
  props.publicConfig = selectPublic(schema);
}

export const get = name => props.config.get(name);

export const getPublicConfig = () => props.publicConfig || {};
