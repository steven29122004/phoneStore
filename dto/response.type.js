class ResponseType {
    constructor(data) {
        this.data = data
    }
    success() {
        this.data
        this.code = 200
        this.message = "Success";
        return this
    }
    error() {
        this.data
        this.code = 404
        this.message = "failed";
        return this
    }
}

module.exports = ResponseType;