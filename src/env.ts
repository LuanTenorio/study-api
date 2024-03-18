export interface EnvConfig {
    DATABASE_URL: string
    QUERY_LOG: boolean
}

export const env: EnvConfig = {
    DATABASE_URL: process.env.DATABASE_URL,
    QUERY_LOG: process.env.QUERY_LOG === "true",
}