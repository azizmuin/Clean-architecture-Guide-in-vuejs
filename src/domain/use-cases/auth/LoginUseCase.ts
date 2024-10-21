import type { loginRequest, tokenData } from "@/domain/entities/auth";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";

export class LoginUseCase {
    private authRepository: IAuthRepository;

    constructor ({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    exceute(payload: loginRequest): Promise<tokenData> {
        return this.authRepository.login(payload);
    }
}
