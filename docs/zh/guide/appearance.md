# 主题外观

## 主题模式

本主题有两种外观模式：

- :sunny: 明亮模式（`light`）
- :first_quarter_moon_with_face: 暗黑模式（`dark`）

默认情况下，主题模式会根据操作系统的主题模式在上述两种模式之间进行切换，并且你也可以通过导航栏（如果有的话）右侧的切换按钮进行手动切换。

当然了，你也可以使用主题配置项 `themeConfig.mode` 来改变默认行为，它可接受下面列出的 3 个字符串值：

- `light` - 仅使用明亮模式；
- `dark` - 仅使用暗黑模式；
- `auto` - 等效于默认行为。

## 自定义主题

本主题借助插件 [@vuepress/palette](https://v2.vuepress.vuejs.org/zh/reference/plugin/palette.html) 实现了调色板和自定义样式功能。

> 本主题使用的 CSS 预处理语言是 [SASS](https://sass-lang.com/)，下面的样式文件均以 `*.scss` 文件为例。

### 调色板 🎨

所谓的调色板就是你可以在 `.vuepress/styles/palette.scss` 文件中自定义颜色变量的值以覆盖主题的默认值，达到自定义外观颜色的目的。

本主题支持的颜色变量以及默认值如下所示：

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

$tipBgColor: #e6f7ff !default;
$tipBgDarkColor: rgba(56, 137, 197, 0.25) !default;

$warningBgColor: #fffaf0 !default;
$warningBgDarkColor: #2b2111 !default;

$dangerBgColor: #fff2f0 !default;
$dangerBgDarkColor: rgba(208, 58, 82, 0.25) !default;

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

$tipColor: #7dc7f5 !default;
$tipDarkColor: #3b9edd !default;

$warningColor: #e0b76c !default;
$warningDarkColor: #e0b76c !default;

$dangerColor: #e0706a !default;
$dangerDarkColor: #db646a !default;

// border colors
$borderColor: #eaeaea !default;
$borderDarkColor: #444c56 !default;

$tipBorderColor: #7acbfd !default;
$tipBorderDarkColor: rgba(56, 137, 197, 0.35) !default;

$warningBorderColor: #f5a623 !default;
$warningBorderDarkColor: #594214 !default;

$dangerBorderColor: #ffccc7 !default;
$dangerBorderDarkColor: rgba(208, 58, 82, 0.35) !default;

$referenceBorderColor: #8a8383 !default;
$referenceBorderDarkColor: #8c8888 !default;

// link colors
$linkColor: $themeColor !default;
$linkDarkColor: $themeDarkColor !default;
```

### 布局

本主题支持响应式布局，默认断点如下所示。同样，你也可以在 `.vuepress/styles/palette.scss` 中覆写它们。

```scss
// responsive breakpoints
$desktop: 1200px !default;
$tablet: 992px !default;
$landscapePhone: 768px !default;
$portraitPhone: 576px !default;
```

此外，你还可以通过下面列出的变量调整部分页面组成的尺寸：

```scss
$maxPageWidth: 90rem !default;
$maxContentWidth: 60rem !default;
$navbarHeight: 3.6rem !default;
$sidebarWidth: 18rem !default;
```

### 自定义样式

最后，你还可以在 `.vuepress/styles/index.scss` 文件中定义额外的样式来满足自己的需求。
