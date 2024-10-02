/// <reference types="vite/client" />
/// <reference types="@tanstack/react-router" />

interface ImportMetaEnv {
    readonly VITE_GH_REPO: string
    readonly VITE_APP_WIKI_CONTENT_URI: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

export interface FileRoutesByTo {
    '/': typeof IndexRoute
    '/$': typeof SplatRoute
    '/documentation': typeof DocumentationRoute
}

export interface FileRoutesByTo {
    '/background': typeof SplatRoute
    '/specification': typeof SplatRoute
    '/implementations': typeof SplatRoute
}

export interface FileRoutesById {
    '/background': typeof SplatRoute
    '/specification': typeof SplatRoute
    '/implementations': typeof SplatRoute
}
