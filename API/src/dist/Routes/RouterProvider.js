"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProvider = exports.HttpMethod = void 0;
const express_1 = require("express");
const Auth_middleware_1 = require("../Auth/Auth.middleware");
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
    HttpMethod[HttpMethod["PUT"] = 2] = "PUT";
    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
const routerProvider = (nonConnectedRoutes, connectedRoutes) => {
    const router = (0, express_1.Router)();
    nonConnectedRoutes.forEach((route) => {
        switch (route.method) {
            case HttpMethod.GET:
                router.get(route.path, ...route.handlers);
                break;
            case HttpMethod.POST:
                router.post(route.path, ...route.handlers);
                break;
            case HttpMethod.PUT:
                router.put(route.path, ...route.handlers);
                break;
            case HttpMethod.DELETE:
                router.delete(route.path, ...route.handlers);
                break;
            default:
                break;
        }
    });
    connectedRoutes.forEach((route) => {
        switch (route.method) {
            case HttpMethod.GET:
                router.get(route.path, Auth_middleware_1.verifyToken, ...route.handlers);
                break;
            case HttpMethod.POST:
                router.post(route.path, Auth_middleware_1.verifyToken, ...route.handlers);
                break;
            case HttpMethod.PUT:
                router.put(route.path, Auth_middleware_1.verifyToken, ...route.handlers);
                break;
            case HttpMethod.DELETE:
                router.delete(route.path, Auth_middleware_1.verifyToken, ...route.handlers);
                break;
            default:
                break;
        }
    });
    return router;
};
exports.routerProvider = routerProvider;
//# sourceMappingURL=RouterProvider.js.map