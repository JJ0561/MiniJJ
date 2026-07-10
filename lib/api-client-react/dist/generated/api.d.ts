import type { QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { BoardMessage, HealthStatus } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetBoardMessagesUrl: () => string;
/**
 * Returns all messages on the shared family noticeboard
 * @summary Get family board messages
 */
export declare const getBoardMessages: (options?: RequestInit) => Promise<BoardMessage[]>;
export declare const getGetBoardMessagesQueryKey: () => readonly ["/api/board"];
export declare const getGetBoardMessagesQueryOptions: <TData = Awaited<ReturnType<typeof getBoardMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBoardMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBoardMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBoardMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof getBoardMessages>>>;
export type GetBoardMessagesQueryError = ErrorType<unknown>;
/**
 * @summary Get family board messages
 */
export declare function useGetBoardMessages<TData = Awaited<ReturnType<typeof getBoardMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBoardMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map