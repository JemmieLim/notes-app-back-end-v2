/* eslint-disable no-underscore-dangle */
class UploadsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postUploadImageHandler(request, h) {
    const { data } = request.payload;
    this._validator.validateImageHeaders(data.hapi.headers);

    const fileName = await this._service.writeFile(data, data.hapi);

    const response = h.response({
      status: 'success',
      data: {
        fileLocation: `${process.env.HOST}:${process.env.PORT}/upload/images/${fileName}`,
      },
    });
    response.code(201);

    return response;
  }
}

module.exports = UploadsHandler;
