export const useImage = (src: string): string => {
    const url = new URL(`../img/${src}`, import.meta.url);
    return url.href;
};
