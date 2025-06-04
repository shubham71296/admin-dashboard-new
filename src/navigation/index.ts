import { allNavs } from "./allNavs";
import type { allNavsProps } from "./allNavs";

export const getNavs = (role: string) => {
  const finalNavs: allNavsProps[] = [];
    allNavs.forEach((item) => {
      if (item.role === role) {
        finalNavs.push(item);
      }
    });
  return finalNavs;
};
