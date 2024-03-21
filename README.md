# SvelteKit Boilerplate

This boilerplate was created to make easy create your first SvelteKit project

## Libraries and Tools

- **Testing:**
  - Unit tests with Vitest (tests in the `test` or `src` folder with the name `*.unit.(test|spec).ts`)
  - Component tests with Playwright-CT (tests in the `src` folder parallel to the component with the name `*.comp(onent)?.(test|spec).ts`)
  - Integration tests with Playwright (tests in the `test` folder with the name `*.int.(test|spec).ts`)
- **Documentation:**
  - Components with Storybook (`.stories.(ts|svelte)` files next to the component)
- **Styling:**
  - TailwindCSS with custom classes (`cluster`, `stack`, `switcher` and `switcher-threshold`)
- **Validation:**
  - Valibot for object validation
- **Internationalization:**
  - Svelte-i18n for text translation

## Project Structure

```
├─ node_modules/
├─ src/
│  ├─ lib/
│  │  ├─ components/
│  │  │  ├─ ...
│  │  │  └─ MyComponent
│  │  │     ├─ MyComponent.svelte
│  │  │     ├─ MyComponent.comp.test.ts
│  │  │     └─ MyComponent.stories.svelte
│  │  └─ locales/
│  ├─ routes/
│  │  ├─ ...
│  │  ├─ +layout.svelte
│  │  └─ +page.svelte
│  └─ ...
├─ test/
│  ├─ ...
│  └─ api.unit.test.ts
├─ package.json
├─ README.md
├─ svelte.config.js
├─ vite.config.ts
└─ ...
```

## Development Standards

- **Testing:**
  - Use Vitest for unit tests.
  - Use Playwright for component and integration tests.
  - Follow naming conventions for test files.
  - You can find examples in project.
- **Documentation:**
  - Use Storybook to document your components.
  - Create `.stories.(ts|svelte)` files next to the component.
- **Styling:**
  - Use TailwindCSS to style your components.
- **Validation:**
  - Use Valibot to validate your objects in form actions and api RESTful.
- **Internationalization:**
  - Use svelte-i18n to translate your texts.

## Getting Started

1. Clone this repository to your computer.
2. Install dependencies with `pnpm install`.
3. Start the development server with `pnpm dev`.
4. Create your components in the `src/lib/components` folder.
5. Create your pages in the `src/routes` folder.
6. Follow the development standards for testing, documentation, styling, validation, and internationalization.

## Questions?

If you have questions or need help, open an issue in this repository.

## Additional Resources

- SvelteKit Documentation: [https://kit.svelte.dev/](https://kit.svelte.dev/)
- Vitest: [https://vitest.dev/](https://vitest.dev/)
- Playwright-CT: [https://playwright.dev/docs/test-components](https://playwright.dev/docs/test-components)
- Storybook: [https://storybook.js.org/](https://storybook.js.org/)
- TailwindCSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- Valibot: [https://www.npmjs.com/package/valibot](https://www.npmjs.com/package/valibot)
- Svelte-i18n: [https://www.npmjs.com/package/svelte-i18n](https://www.npmjs.com/package/svelte-i18n)
