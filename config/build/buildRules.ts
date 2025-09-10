import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { buildScssLoader } from "./rules/buildScssLoader";

export function buildRules(options: BuildOptions): Configuration["module"] {
  const {isDev} = options;
  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const scssLoader = buildScssLoader(isDev);
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  return {
    rules: [tsLoader, scssLoader, svgrLoader, fileLoader],
  };
}
