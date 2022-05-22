//универсальный класс обработки ошибок
class ApiError extends Error{//расширяемый от класса error
    constructor(status,message) {
        super(); //расширение классом Error
        this.status = status;
        this. message = message;
    }



    static NotFound(message){
        return new ApiError(404,message);
    }

    static InternalServerError(message){
        return new ApiError(500,message);
    }

    static Forbidden(message){
        return new ApiError(403,message);
    }


}

module.exports = ApiError;