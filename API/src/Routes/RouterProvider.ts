import { RequestHandler, Router } from "express";
import  {verifyToken}  from '../Auth/Auth.middleware'

export enum HttpMethod {
    GET, POST, PUT, DELETE
}

export type RouteConfig = {
    method: HttpMethod,
    path: string,
    handlers: RequestHandler[]
}
export const routerProvider = (nonConnectedRoutes: RouteConfig[], connectedRoutes: RouteConfig[])=>{
    const router = Router();

    nonConnectedRoutes.forEach((route)=>{
        switch (route.method) {
            case HttpMethod.GET:
                router.get(route.path, ...route.handlers)
                break;
            case HttpMethod.POST:
                router.post(route.path, ...route.handlers)
                break;
            case HttpMethod.PUT:
                router.put(route.path, ...route.handlers)
                break; 
            case HttpMethod.DELETE:
                router.delete(route.path, ...route.handlers)
                break;
            default:
                break;
        }
    })
    
    connectedRoutes.forEach((route)=>{
        switch (route.method) {
            case HttpMethod.GET:
                router.get(route.path, verifyToken ,...route.handlers)
                break;
            case HttpMethod.POST:
                router.post(route.path, verifyToken, ...route.handlers)
                break;
            case HttpMethod.PUT:
                router.put(route.path, verifyToken, ...route.handlers)
                break; 
            case HttpMethod.DELETE:
                router.delete(route.path, verifyToken, ...route.handlers)
                break;
            default:
                break;
        }
    })

    return router
}