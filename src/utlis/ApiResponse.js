class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    super()
    this.statusCode = statusCode
    this.message = message
    this.success = statusCode
  }
}

export default ApiResponse
