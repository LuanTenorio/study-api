import { NotFoundException } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function FindOr404Decorator(message?: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            try{
                const record = await originalMethod.apply(this, args)

                if(record === null){
                    throw new NotFoundException(message ?? "Not found")
                }

                return record
            }catch(e: unknown){
                if(e instanceof PrismaClientKnownRequestError && e.code === "P2025"){
                    throw new NotFoundException(message ?? "Not found")
                }

                throw e
            }
        }
    }
}