/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as LoginImport } from './routes/login'
import { Route as AboutImport } from './routes/about'
import { Route as RouteComponentImport } from './routes/RouteComponent'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const RouteComponentRoute = RouteComponentImport.update({
  id: '/RouteComponent',
  path: '/RouteComponent',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/RouteComponent': {
      id: '/RouteComponent'
      path: '/RouteComponent'
      fullPath: '/RouteComponent'
      preLoaderRoute: typeof RouteComponentImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/RouteComponent': typeof RouteComponentRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/users': typeof UsersRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/RouteComponent': typeof RouteComponentRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/users': typeof UsersRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/RouteComponent': typeof RouteComponentRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/users': typeof UsersRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/RouteComponent' | '/about' | '/login' | '/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/RouteComponent' | '/about' | '/login' | '/users'
  id: '__root__' | '/' | '/RouteComponent' | '/about' | '/login' | '/users'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RouteComponentRoute: typeof RouteComponentRoute
  AboutRoute: typeof AboutRoute
  LoginRoute: typeof LoginRoute
  UsersRoute: typeof UsersRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RouteComponentRoute: RouteComponentRoute,
  AboutRoute: AboutRoute,
  LoginRoute: LoginRoute,
  UsersRoute: UsersRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/RouteComponent",
        "/about",
        "/login",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/RouteComponent": {
      "filePath": "RouteComponent.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/users": {
      "filePath": "users.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
