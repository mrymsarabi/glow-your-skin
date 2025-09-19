// utils/theme.ts
export function setMetaThemeColor(darkMode: boolean) {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', darkMode ? '#1B1C1E' : '#907E5A');
    }
}
