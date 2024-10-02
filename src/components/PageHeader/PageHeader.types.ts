export interface MenuItem {
    uri: string
    external?: boolean
}

export type MenuItems = Record<string, MenuItem>
