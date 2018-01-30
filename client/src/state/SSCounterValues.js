class SSCounterValues {
  constructor() {
    this.clear();
  }

  init(key, value = 0) {
    this.fields[key] = value;
  }

  increment(key) {
    this.fields[key] = 1 + parseInt(this.fields[key], 10);
  }

  getValue(key) {
    return this.fields[key];
  }

  clear() {
    this.fields = {};
  }
}

export default new SSCounterValues();
