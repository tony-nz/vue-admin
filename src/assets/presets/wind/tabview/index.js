export default {
  navContainer: ({ props }) => ({
    class: [
      // Position
      "relative",
      // "px-4",
      "bg-emerald-400 dark:bg-surface-800",
      // "rounded-b-lg shadow-lg",
      // "rounded-b-lg shadow-lg",

      // Misc
      { "overflow-hidden": props.scrollable },
    ],
  }),
  navContent: {
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden",
    ],
  },
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",

      // Size and Shape
      "h-full w-12",
      "rounded-none",

      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-primary-500 dark:text-primary-400",
      "shadow-md",
    ],
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",

      // Size and Shape
      "h-full w-12",
      "rounded-none",

      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "text-primary-500 dark:text-primary-400",
      "shadow-md",
    ],
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1",

      // Spacing
      "list-none",
      "p-0 m-0",

      // Colors
      // "border-b border-surface-200 dark:border-surface-700",
      "text-white dark:text-surface-0/80",
      // "text-surface-900 dark:text-surface-0/80",
    ],
  },
  tabpanel: {
    header: ({ props }) => ({
      class: [
        // Spacing
        "mr-0",

        // Misc
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none":
            props?.disabled,
        },
      ],
    }),
    headerAction: ({ parent, context }) => ({
      class: [
        "relative",

        // Font
        "font-medium",
        "text-md",

        // Flexbox and Alignment
        "flex items-center",

        // Spacing
        "py-4 px-3",
        "-mb-[1px]",

        // Shape
        // "border-b-4",
        // "rounded-t-md",

        // Colors and Conditions
        {
          // "border-emerald-300 dark:border-emerald-700":
          // parent.state.d_activeIndex !== context.index,
          "bg-emerald-400 dark:bg-surface-800":
            parent.state.d_activeIndex !== context.index,
          "text-primary-600 dark:text-surface-0/80":
            parent.state.d_activeIndex !== context.index,

          // eslint-disable-next-line no-dupe-keys
          "bg-emerald-500 dark:bg-surface-800":
            parent.state.d_activeIndex === context.index,
          "border-primary-600 dark:border-primary-400":
            parent.state.d_activeIndex === context.index,
          "text-white dark:text-primary-400":
            parent.state.d_activeIndex === context.index,
        },

        // States
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset",
        "focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        {
          "hover:bg-emerald-500 dark:hover:bg-surface-800/80":
            parent.state.d_activeIndex !== context.index,
          "hover:border-surface-400 dark:hover:border-surface-600":
            parent.state.d_activeIndex !== context.index,
          "hover:text-white dark:hover:text-surface-0":
            parent.state.d_activeIndex !== context.index,
        },

        // Transitions
        "transition-all duration-200",

        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "user-select-none",
        "whitespace-nowrap",
      ],
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap",
      ],
    },
    content: {
      class: [
        // Spacing
        // "p-6",

        // Shape
        "rounded-b-md",

        // Colors
        "dark:bg-surface-800",
        "text-surface-700 dark:text-surface-0/80",
        "border-0",
      ],
    },
  },
};
