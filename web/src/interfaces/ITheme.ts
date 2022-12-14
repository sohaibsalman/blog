interface ITheme {
  default: string;
  dark: IThemeMode;
  light: IThemeMode;
}

interface IThemeMode {
  colorPrimary: string;
  colorPrimaryDark: string;
  colorSecondary: string;
  fontColorPrimary: string;
  fontColorSecondary: string;
}

export type { ITheme, IThemeMode };
