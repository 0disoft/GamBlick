import { test, expect } from "bun:test";
import { cn } from "./utils";

test("cn function merges class names correctly", () => {
  expect(cn("class1", "class2")).toBe("class1 class2");
  expect(cn("class1", "", "class2")).toBe("class1 class2");
  expect(cn("class1", null, "class2")).toBe("class1 class2");
  expect(cn("class1", undefined, "class2")).toBe("class1 class2");
  expect(cn("class1", "class2 class3")).toBe("class1 class2 class3");
  // Corrected expectation for tailwind-merge behavior with non-conflicting duplicates
  expect(cn("class1", "class2", "class1")).toBe("class1 class2 class1");
});
