# Text Editor Project

A simple web-based text editor built using HTML, CSS, and JavaScript. This editor uses the `execCommand()` API for text formatting, which is now deprecated and has limited browser support.

## Features

- Font styling: Bold, Italic, Underline, and StrikeThrough.
- Text alignment: Left, Center, Right, and Justify.
- Text scripts: Subscript and Superscript.
- Color formatting: Foreground (text color) and Background (highlight color).
- List formatting: Ordered and Unordered lists.
- Insert options: Hyperlinks and Images.
- Text indentation: Indent and Outdent.
- Responsive design for larger screens.

## Limitations

- **Deprecation Warning**: The editor relies on the `execCommand()` API, which is deprecated and supported only in a few modern browsers.
- **Compatibility**: 
  - Fully tested and functional on **Chrome Version 131.0.6778.140 (Official Build) (64-bit)**.
  - Limited functionality on mobile browsers.
- **Mobile Usage**: The editor is responsive but may not work as expected on mobile devices.

## How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in any modern browser (preferably Chrome for the best experience).
3. Use the toolbar to format text, insert images, and adjust alignment.

## Known Issues

- Limited support for mobile devices.
- Some features may not work in non-Chromium-based browsers.

## Demo

You can check the website [here](https://text-editor-brown-theta.vercel.app/).

## Future Plans

I am planning to develop a new version of this text editor that will replace the deprecated API and offer better browser compatibility. However, this will take some time to complete.

---

**Note**: While the editor is functional, it is intended as a basic project. For production-level usage, consider alternative APIs or frameworks for text editing.

Enjoy exploring and customizing this text editor! 😊
