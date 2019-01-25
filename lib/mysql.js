'use strict';

class MySQLConnector {
  constructor(clientConfig) {
    this.client = null;
    this.clientConfig = clientConfig;
  }

  async connect() {}
  async disconnect() {}
}

module.exports = MySQLConnector;
