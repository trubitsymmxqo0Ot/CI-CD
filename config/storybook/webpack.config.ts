import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "!/config/build/types/types";
import { buildScssLoader } from "../build/rules/buildScssLoader";
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: "",
    entry: "",
    output: "",
    src: path.resolve(__dirname, "..", "..", "src"),
    absoluteSrc: path.resolve(__dirname, "..", ".."),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": paths.src,
    "!": paths.absoluteSrc,
  };
  config.resolve.extensions.push(".tsx", ".ts", ".js");

config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      };
    }
    return rule;
  });
  config.module.rules.push({ test: /\.svg$/, use: ["@svgr/webpack"] });
  config.module.rules.push(buildScssLoader(true));
  return config;
};
