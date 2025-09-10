import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildModuleLoader } from "./buildModuleLoader";

export const buildScssLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      buildModuleLoader(isDev),
      "sass-loader",
    ],
  };
};
