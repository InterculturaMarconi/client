export const useClass = (styles: CSSModuleClasses, ...classes: string[]) => classes.map(name => styles[name]).join(' ');
