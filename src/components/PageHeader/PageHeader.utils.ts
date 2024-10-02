import { MenuItems } from './PageHeader.types'

export const getActiveLocationKey = (menuItems: MenuItems, location: string): string | undefined => {
    const uri = location != null ? location.substring(1) : location

    return Object.keys(menuItems).find((item) => item === uri)
}
