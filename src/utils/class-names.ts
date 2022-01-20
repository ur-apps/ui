type TClasses = Array<string | TClasses | undefined>;

export function classNames(...classes: TClasses): string {
  return classes
    .map((el) => (Array.isArray(el) ? classNames(...el) : el))
    .filter((el) => el)
    .join(' ');
}
