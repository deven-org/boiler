export const TestingMixin = (superClass) =>
  class extends superClass {
    constructor() {
      super();
      console.log(`mixin was created`);
    }
    connectedCallback() {
      super.connectedCallback();
      addEventListener('propChanged', this._onPropChanged);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      removeEventListener('propChanged', this._onPropChanged);
    }
    _onPropChanged = (event: any) => {
      this.hasError = event.detail.hasError;
      this.errorMessage = event.detail.errorMessage;
    };
  };
