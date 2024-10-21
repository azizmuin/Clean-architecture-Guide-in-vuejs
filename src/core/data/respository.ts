import type { AxiosError } from "axios";
import { AuthenticationError, ErrorFold, ServerError, UnexpectedError } from "../domain/DataError";
import type CustomAxios from "../utility/customAxios";

export class BaseRepository {
    public axios;

    constructor({ axios }: { axios: CustomAxios }) {
        this.axios = axios;
    };

    handleErrors(error: AxiosError | any): Error {
        if (error.response) {
            const axiosError = error as AxiosError;

            if (axiosError.response && axiosError.response.status >= 401 && axiosError.response.status <= 403) {
                return new AuthenticationError('Token has Expired, kinldy Login Again');
            }

            if (error?.response?.data?.errors) {
                return new ErrorFold("There are something errors", error?.response?.data?.errors);
            }
            if (error?.response?.data?.error) {
                return new ServerError(error?.response.data.error, error.response.status);
            }
        }
        if (error.request) {
            return new UnexpectedError("Unexpected error occurred");
        }
        else {
            return new UnexpectedError("Unexpected error occurred");
        }
    }
}