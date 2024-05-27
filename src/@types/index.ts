export type YesOrNo = "Yes" | "No";

export const requiredFiles = [
  "src",
  "src/@types",
  "src/@types/navigation",
  "src/navigators",
  "src/navigators/stack",
  "src/screens",
  "src/screens/stacks",
] as const;

export type RequiredFiles = (typeof requiredFiles)[number];
