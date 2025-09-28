export interface FlatHeading {
  slug: string;
  text: string;
  depth: number; // Absolute Depth
}

export interface NestedHeading {
  slug: string;
  text: string;
  subheadings?: NestedHeading[];
  nestedDepth: number;
  absoluteDepth?: number;
}

export type FlatHeadings = FlatHeading[];
export type NestedHeadings = NestedHeading[];

export const flat2NestedHeadings = (
  flatHeadings: FlatHeading[],
): NestedHeading[] => {
  const result: NestedHeading[] = [];

  const stack: NestedHeading[] = [];

  for (const heading of flatHeadings) {
    while (
      stack.length > 0 &&
      (stack[stack.length - 1].absoluteDepth ?? 0) >= heading.depth
    ) {
      stack.pop();
    }

    let nestedDepth: number;
    if (stack.length === 0) {
      nestedDepth = 1;
    } else {
      nestedDepth = stack[stack.length - 1].nestedDepth + 1;
    }

    const node: NestedHeading = {
      ...heading,
      absoluteDepth: heading.depth,
      subheadings: [],
      nestedDepth: nestedDepth,
    };

    if (stack.length === 0) {
      result.push(node);
    } else {
      stack[stack.length - 1].subheadings = [
        ...(stack[stack.length - 1].subheadings ?? []),
        node,
      ];
    }

    stack.push(node);
  }

  return result;
};
