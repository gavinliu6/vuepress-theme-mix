# Appearance

## Theme Mode

VuePress Theme Mix has two modes of appearance:

- :sunny: Light Mode (`light`)
- :first_quarter_moon_with_face: Dark Mode (`dark`)

By default, the theme mode switches between the above two modes according to the OS theme mode, and you can also switch manually via the toggle button on the right side of the navigation bar (if it exists).

Of course, you can also change the default behavior using the theme configuration item `themeConfig.mode`, which accepts the 3 string values listed below:

- `light` - Only light mode
- `dark` - Only dark mode
- `auto` - Equivalent to the default behavior

## Custom Theme

This theme implements color palette and custom styles features with the help of the plugin [@vuepress/palette](https://v2.vuepress.vuejs.org/reference/plugin/palette.html).

> The CSS preprocessing language used in this theme is [SASS](https://sass-lang.com/), and the following style files are all `*.scss` files as examples.

### Palette 🎨

The palette is where you can customize the values of the color variables in the `.vuepress/styles/palette.scss` file to override the theme's default values to customize the appearance colors.

The color variables supported by this theme and their default values are shown below:

```scss
// thmem colors
$themeColor: #fe7846 !default;
$themeDarkColor: #ed8a63 !default;

// background colors
$bgColor: #fff !default;
$bgDarkColor: #2f3136 !default;

$deepBgColor: #f2f2f2 !default;
$deepBgDarkColor: #464c53 !default;

$inlineCodeBgColor: #1b1f230d !default;
$inlineCodeBgDarkColor: #32373e !default;

$blockCodeBgColor: #2b2b2b !default;
$blockCodeBgDarkColor: #32373e !default;

$highlightLineBgColor: #464542 !default;
$highlightLineBgDarkColor: #52555a !default;

$tipBgColor: #f3f5f7 !default;
$tipBgDarkColor: #373b40 !default;
$warningBgColor: #fffaf0 !default;
$warningBgDarkColor: #8c7346 !default;
$dangerBgColor: #fccece !default;
$dangerBgDarkColor: #906e6e !default;
$referenceBgColor: rgba(0, 0, 0, 0.054) !default;
$referenceBgDarkColor: rgba(255, 255, 255, 0.054) !default;

// text colors
$textPrimaryColor: #333 !default;
$textPrimaryDarkColor: #dcddd8 !default;
$textSecondaryColor: #444 !default;
$textSecondaryDarkColor: #a2a9af !default;
$textTertiaryColor: #666 !default;
$textTertiaryDarkColor: #666 !default;

$codeColor: #ed8a63 !default;
$codeDarkColor: #b17c51 !default;

$tipColor: $textSecondaryColor !default;
$tipDarkColor: $textSecondaryDarkColor !default;
$warningColor: #e0b76c !default;
$warningDarkColor: #e0b76c !default;
$dangerColor: #e0706a !default;
$dangerDarkColor: #e2aeac !default;

// border colors
$borderColor: #eaeaea !default;
$borderDarkColor: #444c56 !default;
$tipBorderColor: #96ceb4 !default;
$tipBorderDarkColor: $themeDarkColor !default;
$warningBorderColor: #f5a623 !default;
$warningBorderDarkColor: #ab570a !default;
$dangerBorderColor: #ff6768 !default;
$dangerBorderDarkColor: #d13f31 !default;
$referenceBorderColor: #8a8383 !default;
$referenceBorderDarkColor: #8c8888 !default;

// link colors
$linkColor: $themeColor !default;
$linkDarkColor: $themeDarkColor !default;
```

### Layout

This theme supports responsive layout with default breakpoints as shown below. Same as above, you can override them in `.vuepress/styles/palette.scss` .

```scss
// responsive breakpoints
$desktop: 1200px !default;
$tablet: 992px !default;
$landscapePhone: 768px !default;
$portraitPhone: 576px !default;
```

In addition, you can resize some of the page compositions with the following listed variables:

```scss
$maxWidth: 90rem;
$navbarHeight: 3.6rem !default;
$sidebarWidth: 15rem !default;
$maxPageWidth: 90rem !default;
$maxContentWidth: 960px !default;
```

### Custom Styles

Finally, you can also define additional styles to meet your needs in the `.vuepress/styles/index.scss` file.
