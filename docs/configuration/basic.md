# Basic Config

## mode

- Type: `'light' | 'dark' | 'auto'`

- Default: `auto`

- Explanation: specify theme mode

  - `light` - Light Mode
  - `dark` - Dark Mode
  - `auto` - Automatic switching according to the theme mode of the operating system.

- Reference
  - [Guide > Appearance](/guide/appearance.html)

## home

- Type: `string`

- Default: `/`

- Explanation: specify the path of the homepage which will be used for the logo link of the navbar and the back to home link of the 404 page.

## notFound

- Type: `string[]`

- Default: `["Oops! You're lost. 😕"]`

- Explanation: specify the messages of the 404 page. The message will be randomly picked from the array when users enter the 404 page.

## backToHome

- Type: string

- Default: `'Back to home'`

- Explanation: specify the text of the back to home link in the 404 page.

## docsRepo

- Type: `string`

- Explanation: specify the repository url of your documentation source files. This will be used for generating the _edit this page_ link.

## docsBranch

- Type: `string`

- Default: `main`

- Explanation: specify the repository branch of your documentation source files. This will be used for generating the _edit this page_ link.

## docsDir

- Type: `string`

- Default: `''`

- Explanation: specify the directory of your documentation source files in the repository. This will be used for generating the _edit this page_ link.
