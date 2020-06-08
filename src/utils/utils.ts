export const createLink = ({
  path,
  resource,
}: {
  path: string;
  resource: string;
}) => {
  return `${path}${resource}`;
};
