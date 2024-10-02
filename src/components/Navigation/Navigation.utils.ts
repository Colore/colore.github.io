export const getActiveLocationKey = (menuItems: string[], location: string): string | undefined => {
    const uri = location != null ? location.substring(1) : location

    if (location === '/') return menuItems[0]

    return Object.keys(menuItems).find((item) => item === uri)
}
