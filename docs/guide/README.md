# Introduction

VuePress Theme Mix is a minimalistic theme that is designed and developed for [VuePress 2](https://v2.vuepress.vuejs.org/). It's deeply customized based on the [default theme](https://github.com/vuepress/vuepress-next/tree/main/packages/@vuepress/theme-default) of VuePress 2, but it's not inherited from the default theme, so it's able to be used in an inherited way as well.

## Notes

::: danger Attention please ❗
Be sure to read the following notes before using this theme.
:::

I must admit that I'm not a professional front-end developer, and before I started developing, I didn't even know much about some front-end knowledge. I just learned them on the spot. What's more, this is my spare-time project, it may have some potential issues. I will appreciate it if you encounter one and give me feedback timely.

In conclusion, I do not guarantee the stability of this theme in a production environment, and users need to make their own trade-offs.

### Original Intention

As a developer, I mostly use Markdown to record my daily learning and working notes. And I have used several Markdown-centered static site generators to host my notes, among which VuePress is my favorite. Although it comes with the default theme is good enough, but for me personally, some parts are not very satisfactory. Given this, I plan to take advantage of the major upgrade of Vue and VuePress to write a theme myself.

First of all, the theme must have a fresh and clean UI, common and practical features, and it should not be full of dazzling cool animations (which I probably can't achieve :disappointed:). Secondly, dark mode is popular nowadays, and it's really beneficial for reading documents in a dark environment, so the theme should support it.

The theme name Mix refers to the word Mixture, meaning that the theme is a 'mixture' of quality features.

### Future...

According to user feedback and the author's own experience, some new features will come from time to time with version updates.

If you encounter some problems when using it, or have any new ideas, the authors sincerely look forward to your feedback. :heart:

## Theme Features

### Vue 3 & Vite

Since this theme is developed for VuePress 2 and uses the latest [Vue 3](https://v3.vuejs.org/) related technologies, you can naturally use the new features of Vue 3 when using the theme or extending its functionality for it.

In addition, when developing and building VuePress websites, you can also use the next-generation packaging tool, [Vite](https://vitejs.dev/), which is a great building experience compared to other traditional packaging tools.

::: warning
Vite is still in active development and should be used with caution in production environments.
:::

### Dark Mode

This theme follows the system settings and automatically switches between light and dark modes. The dark mode is based on GitHub official theme, Dark dimmed. It looks very nice, which greatly enhances the experience of reading documents in dim light.

### Theme Customization

Different users prefer different color schemes and layout, so this theme largely meets the needs of user customization. Check out [Guide > Appearance > Custom Theme](/guide/appearance.html#custom-theme) for more details.

### Well-organized Sidebar

The theme combines the actual use scenarios and redesigns the configuration of the sidebar to meet the different navigation items. Check out [Guide > Sidebar](/guide/sidebar.html) for more details.

### Responsive Layout

First of all, it should be noted that the author is very uncomfortable with accessing documentation websites on small screen devices such as cell phones, so this theme is developed with the principle of **PC first**. But for completeness, VuePress Theme Mix still supports responsive layout, well you can get a good reading experience on mobile devices such as tablets and phones as well.
