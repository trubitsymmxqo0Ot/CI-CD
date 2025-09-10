type Mods = Record<string, string | boolean>;
export function classNames(
  cls: string,
  mods: Mods = {},
  additionals: string[] = []
): string {
  return [
    cls,
    ...additionals.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([className]) => className),
  ].filter(Boolean).join(" ");
}
