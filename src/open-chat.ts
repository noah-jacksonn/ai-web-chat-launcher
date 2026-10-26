import { Clipboard, closeMainWindow, environment, open, showHUD } from "@raycast/api";
import { execFile } from "node:child_process";
import { join } from "node:path";

const sites = {
  claude: { url: "https://claude.ai/new", label: "Write your prompt to Claude" },
  gemini: { url: "https://gemini.google.com/app", label: "Enter a prompt for Gemini" },
  chatgpt: { url: "https://chatgpt.com/", label: "Ask ChatGPT" },
  grok: { url: "https://grok.com/", label: "Ask Grok anything" },
} as const;

function fillPrompt(url: string, label: string, text: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = execFile(
      join(environment.assetsPath, "wait-for-composer"),
      [url, label],
      { timeout: 45000 },
      (error, stdout) => (error ? reject(error) : resolve(stdout.trim())),
    );
    child.stdin?.on("error", reject);
    // Text stays in memory; never put it in URLs, process arguments, or logs.
    child.stdin?.end(text);
  });
}

export async function openChat(provider: keyof typeof sites, useClipboard = false) {
  try {
    const text = useClipboard ? await Clipboard.readText() : undefined;
    const site = sites[provider];
    await closeMainWindow({ clearRootSearch: true });
    await open(site.url, "com.google.Chrome");
    if (!text?.trim()) return;

    // Fill the identified prompt without submitting it.
    const result = await fillPrompt(site.url, site.label, text);
    if (result === "filled") return;
    if (result === "paste") {
      await Clipboard.paste({ text });
      return;
    }
    if (result === "accessibility") {
      await showHUD("Allow Raycast in System Settings → Privacy & Security → Accessibility, then retry");
    } else if (result === "draft") {
      await showHUD("Existing draft kept — press ⌘V to add your clipboard");
    } else {
      await showHUD("Site opened — focus the prompt box and press ⌘V");
    }
    return result;
  } catch {
    await showHUD("Couldn’t complete the chat — check Chrome to continue");
  }
}
