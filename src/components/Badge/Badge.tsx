import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}
const Badge = ({ children }: BadgeProps) => {
  return (
    <div>
      <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
        {children}
      </span>
    </div>
  );
};
export default Badge;
