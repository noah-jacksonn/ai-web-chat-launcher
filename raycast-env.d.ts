/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `cla` command */
  export type Cla = ExtensionPreferences & {}
  /** Preferences accessible in the `gem` command */
  export type Gem = ExtensionPreferences & {}
  /** Preferences accessible in the `gpt` command */
  export type Gpt = ExtensionPreferences & {}
  /** Preferences accessible in the `grok` command */
  export type Grok = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `cla` command */
  export type Cla = {
  /** c = clipboard */
  "mode": string
}
  /** Arguments passed to the `gem` command */
  export type Gem = {
  /** c = clipboard */
  "mode": string
}
  /** Arguments passed to the `gpt` command */
  export type Gpt = {
  /** c = clipboard */
  "mode": string
}
  /** Arguments passed to the `grok` command */
  export type Grok = {
  /** c = clipboard */
  "mode": string
}
}

