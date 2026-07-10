import re

with open("artifacts/orion-hub/src/index.css", "r") as f:
    css = f.read()

# We want to replace the whole :root { ... } and .dark { ... } blocks
# Let's just find them by index and replace.
# It's easier to find "/* LIGHT MODE */" to the end of ".dark { ... }"
# and replace it.

light_mode_idx = css.find("/* LIGHT MODE */")
base_layer_idx = css.find("@layer base {")

if light_mode_idx != -1 and base_layer_idx != -1:
    new_vars = """/* LIGHT MODE */
:root {
  --button-outline: rgba(0, 0, 0, 0.1);
  --badge-outline: rgba(0, 0, 0, 0.05);
  --opaque-button-border-intensity: -8;
  --elevate-1: rgba(0, 0, 0, 0.03);
  --elevate-2: rgba(0, 0, 0, 0.08);

  --background: 0 0% 2%;
  --foreground: 0 0% 100%;
  --border: 0 0% 12%;
  --card: 0 0% 4%;
  --card-foreground: 0 0% 100%;
  --card-border: 0 0% 10%;
  --sidebar: 0 0% 2%;
  --sidebar-foreground: 0 0% 100%;
  --sidebar-border: 0 0% 12%;
  --sidebar-primary: 0 0% 100%;
  --sidebar-primary-foreground: 0 0% 5%;
  --sidebar-accent: 0 0% 15%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-ring: 0 0% 80%;
  --popover: 0 0% 4%;
  --popover-foreground: 0 0% 100%;
  --popover-border: 0 0% 10%;
  --primary: 0 0% 100%;
  --primary-foreground: 0 0% 5%;
  --secondary: 0 0% 15%;
  --secondary-foreground: 0 0% 100%;
  --muted: 0 0% 8%;
  --muted-foreground: 0 0% 45%;
  --accent: 0 0% 15%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 100% 50%;
  --destructive-foreground: 0 0% 100%;
  --input: 0 0% 15%;
  --ring: 0 0% 80%;
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;

  --app-font-sans: 'Inter', sans-serif;
  --app-font-serif: Georgia, serif;
  --app-font-mono: Menlo, monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0px 2px 0px 0px hsl(0 0% 0% / 0);
  --shadow-xs: 0px 2px 0px 0px hsl(0 0% 0% / 0);
  --shadow-sm: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
  --shadow: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
  --shadow-md: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 2px 4px -1px hsl(0 0% 0% / 0);
  --shadow-lg: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 4px 6px -1px hsl(0 0% 0% / 0);
  --shadow-xl: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 8px 10px -1px hsl(0 0% 0% / 0);
  --shadow-2xl: 0px 2px 0px 0px hsl(0 0% 0% / 0);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
  
  --sidebar-primary-border: hsl(var(--sidebar-primary));
  --sidebar-primary-border: hsl(from hsl(var(--sidebar-primary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --sidebar-accent-border: hsl(var(--sidebar-accent));
  --sidebar-accent-border: hsl(from hsl(var(--sidebar-accent)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --primary-border: hsl(var(--primary));
  --primary-border: hsl(from hsl(var(--primary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --secondary-border: hsl(var(--secondary));
  --secondary-border: hsl(from hsl(var(--secondary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --muted-border: hsl(var(--muted));
  --muted-border: hsl(from hsl(var(--muted)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --accent-border: hsl(var(--accent));
  --accent-border: hsl(from hsl(var(--accent)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --destructive-border: hsl(var(--destructive));
  --destructive-border: hsl(from hsl(var(--destructive)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
}

.dark {
  --button-outline: rgba(255, 255, 255, 0.1);
  --badge-outline: rgba(255, 255, 255, 0.05);
  --opaque-button-border-intensity: 9;
  --elevate-1: rgba(255, 255, 255, 0.04);
  --elevate-2: rgba(255, 255, 255, 0.09);

  --background: 0 0% 2%;
  --foreground: 0 0% 100%;
  --border: 0 0% 12%;
  --card: 0 0% 4%;
  --card-foreground: 0 0% 100%;
  --card-border: 0 0% 10%;
  --sidebar: 0 0% 2%;
  --sidebar-foreground: 0 0% 100%;
  --sidebar-border: 0 0% 12%;
  --sidebar-primary: 0 0% 100%;
  --sidebar-primary-foreground: 0 0% 5%;
  --sidebar-accent: 0 0% 15%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-ring: 0 0% 80%;
  --popover: 0 0% 4%;
  --popover-foreground: 0 0% 100%;
  --popover-border: 0 0% 10%;
  --primary: 0 0% 100%;
  --primary-foreground: 0 0% 5%;
  --secondary: 0 0% 15%;
  --secondary-foreground: 0 0% 100%;
  --muted: 0 0% 8%;
  --muted-foreground: 0 0% 45%;
  --accent: 0 0% 15%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 100% 50%;
  --destructive-foreground: 0 0% 100%;
  --input: 0 0% 15%;
  --ring: 0 0% 80%;
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;

  --shadow-2xs: 0px 2px 0px 0px hsl(0 0% 0% / 0);
  --shadow-xs: 0px 2px 0px 0px hsl(0 0% 0% / 0);
  --shadow-sm: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
  --shadow: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
  --shadow-md: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 2px 4px -1px hsl(0 0% 0% / 0);
  --shadow-lg: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 4px 6px -1px hsl(0 0% 0% / 0);
  --shadow-xl: 0px 2px 0px 0px hsl(0 0% 0% / 0), 0px 8px 10px -1px hsl(0 0% 0% / 0);
  --shadow-2xl: 0px 2px 0px 0px hsl(0 0% 0% / 0);
}

"""
    new_css = css[:light_mode_idx] + new_vars + css[base_layer_idx:]
    with open("artifacts/orion-hub/src/index.css", "w") as f:
        f.write(new_css)
    print("Replaced variables successfully.")
else:
    print("Could not find delimiters.")
