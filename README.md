# Copy to AI Chat

Local Raycast commands:

| Open website | Open with clipboard | Destination |
| --- | --- | --- |
| `cla` | `cla c` | Claude |
| `gem` | `gem c` | Gemini |
| `gpt` | `gpt c` | ChatGPT |
| `grok` | `grok c` | Grok |

Commands open the website by default without reading your clipboard. Search for the command ending in `c` (for example, type `cla c`) to fill the prompt with your clipboard’s plain text. These are separate commands, so no argument field or Tab key is needed. Nothing is submitted automatically: review or edit the text, then send it yourself. With `c`, empty, whitespace-only, and non-text clipboards just open the site. Existing drafts are kept.

## Install locally

Requires macOS, Google Chrome, Raycast, Node.js, and Xcode Command Line Tools for the small native helper.

```sh
npm install
npm run dev
```

Raycast imports the eight commands. Once imported, stop the development watcher with Ctrl-C; the local commands remain installed. Search Raycast for `cla`, `gem`, `gpt`, or `grok`, with ` c` for the clipboard commands. Set the exact aliases `cla c`, `gem c`, `gpt c`, and `grok c` on their corresponding commands in Raycast Settings → Extensions so search history cannot prioritize a different command. Aliases are local Raycast settings and do not travel with this repository.

Raycast needs Accessibility permission in System Settings → Privacy & Security → Accessibility. Sign into each AI website in Chrome normally.

## How it works

Each command opens the regular new-chat URL in Chrome. The commands ending in `c` read plain text through the Raycast Clipboard API and start the filling helper. A Swift helper waits for the expected prompt field and enters the text using macOS accessibility. If the editor does not support direct accessibility text entry, Raycast pastes the text into the identified, focused field. Clipboard text is never included in a URL, process argument, log, or file.

An existing draft is preserved unless it already matches the clipboard text. Login screens, unavailable Accessibility permission, and slow loading fall back to a message with manual instructions. The field labels currently match the English website interfaces.

## Validate

```sh
npm run build
npm run typecheck
```

`native/WaitForComposer.swift` is built for the current Mac architecture. Rebuild when moving to another Mac architecture.
