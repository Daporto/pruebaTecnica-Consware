class BaseSerializer {
    constructor(status, data, pagination = null) {
      this.status = status;
      this.data = data;
      this.paginationInfo = pagination;
    }
  
    toJSON() {
      return {
        status: this.status,
        data: this.data,
        paginationInfo: this.paginationInfo,
      };
    }
  }
  
  module.exports = BaseSerializer;