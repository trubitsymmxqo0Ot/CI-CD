export const buildModuleLoader = (isDev: boolean) => {
    return {
    loader: "css-loader",
    options: {
      modules: {
        namedExport: false,
        localIdentName: isDev
          ? "[path][name]__[local]"
          : "[hash:base64:8]",
        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
        mode: 'local',
      },
    },
  };
}