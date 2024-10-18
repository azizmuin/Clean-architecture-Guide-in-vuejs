import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { loginRequest, tokenData } from "@/domain/entities/auth";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";

export class LoginUseCase {
    private authRepository: IAuthRepository;

    constructor ({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    async exceute(payload: loginRequest): Promise<tokenData> {
        try {
            let token = await this.authRepository.login(payload);
            return Promise.resolve(token)
        } catch (error) {
            return Promise.reject(error)
        }
        // return new Promise(async (resolve, reject) => {
        //     try {
        //         resolve(token)
        //     } catch (error) {
        //         reject(error)
        //     }
        // })
    }
}
