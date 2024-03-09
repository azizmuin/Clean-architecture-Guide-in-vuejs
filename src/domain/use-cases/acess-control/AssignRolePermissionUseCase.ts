import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { AssignRolePermissionRequest, Role } from "@/domain/entities/access-control";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";

export class AssignRolePermissionUseCase {
    private accessControlRepository: IAccessControlRepository;
    constructor({ accessControlRepository }: { accessControlRepository: IAccessControlRepository; }) {
        this.accessControlRepository = accessControlRepository;
    }

    execute(payload: AssignRolePermissionRequest): Promise<Either<DataError, Role>> {
        return this.accessControlRepository.AssignRolePermission(payload);
    }
}
