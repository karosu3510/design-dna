/* Claude — chat home page replica */
window.CLAUDE_CHAT_DOC = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Claude</title>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-100: #f8f8f6;
  --bg-200: #efede8;
  --bg-300: #e8e5de;
  --text-100: #121212;
  --text-200: #373734;
  --text-300: #5d5d5a;
  --text-400: #7a7a76;
  --border-100: rgba(11, 11, 11, 0.06);
  --border-200: rgba(11, 11, 11, 0.08);
  --border-300: rgba(11, 11, 11, 0.1);
  --accent-main: hsl(24, 80%, 52%);

  --font-sans: "Söhne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Tiempos Text", Georgia, serif;
  --font-mono: "Söhne Mono", "Fira Code", monospace;
  --fw-regular: 400;
  --fw-medium: 430;
  --fw-semibold: 560;
  --fw-bold: 700;

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.08);
}

body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: var(--fw-regular);
  color: var(--text-100);
  background: #ffffff;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  overflow: hidden;
}

/* ─── Layout ─── */
.app {
  display: flex;
  height: 100vh;
}

/* ─── Sidebar ─── */
.sidebar {
  width: 200px;
  height: 100vh;
  background: var(--bg-100);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 12px 0;
  border-right: 1px solid var(--border-100);
}

.sidebar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px 16px;
}

.sidebar-brand-name {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: var(--fw-bold);
  color: var(--text-100);
  letter-spacing: -0.02em;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 12px;
  border-radius: var(--radius-lg);
  font-size: 14px;
  font-weight: var(--fw-regular);
  color: var(--text-200);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s;
}
.nav-item:hover { background: var(--bg-200); }
.nav-item svg { width: 20px; height: 20px; fill: currentColor; flex-shrink: 0; }

.nav-item-badge {
  margin-left: auto;
  font-size: 11px;
  color: var(--accent-main);
  font-weight: var(--fw-medium);
}

.sidebar-section {
  margin-top: 20px;
  padding: 0 12px;
}

.sidebar-section-label {
  font-size: 11px;
  font-weight: var(--fw-medium);
  color: var(--text-400);
  margin-bottom: 6px;
  padding-left: 4px;
}

.sidebar-recent-item {
  display: block;
  padding: 6px 12px;
  border-radius: var(--radius-lg);
  font-size: 13px;
  color: var(--text-200);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background 0.12s;
}
.sidebar-recent-item:hover { background: var(--bg-200); }

.sidebar-footer {
  margin-top: auto;
  padding: 12px;
  border-top: 1px solid var(--border-100);
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar-footer-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #4f7df3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.sidebar-footer-info { flex: 1; min-width: 0; }
.sidebar-footer-name { font-size: 13px; font-weight: var(--fw-medium); color: var(--text-100); display: flex; align-items: center; gap: 6px; }
.sidebar-footer-plan { font-size: 11px; color: var(--text-400); }
.online-dot { width: 6px; height: 6px; border-radius: 50%; background: #3b82f6; }

.sidebar-footer-actions {
  display: flex;
  gap: 2px;
}

/* ─── Icon Button ─── */
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-md);
  border: none;
  background: transparent;
  color: var(--text-400);
  cursor: pointer;
  transition: all 0.12s;
}
.icon-btn:hover { background: var(--bg-200); color: var(--text-100); }
.icon-btn svg { width: 18px; height: 18px; fill: currentColor; }

/* ─── Main ─── */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 0;
  background: #ffffff;
}

/* Top bar */
.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  z-index: 10;
}

.top-bar-center {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-400);
}

.top-bar-center a {
  color: var(--text-300);
  text-decoration: none;
  cursor: pointer;
}
.top-bar-center a:hover { color: var(--text-100); }

.top-bar-right {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}

/* ─── Center Content ─── */
.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 640px;
  padding: 0 24px;
}

/* Greeting */
.greeting {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.greeting-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.greeting-icon svg {
  width: 36px;
  height: 36px;
  fill: var(--accent-main);
}

.greeting-text {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: var(--fw-regular);
  color: var(--text-100);
  letter-spacing: -0.01em;
}

/* ─── Composer ─── */
.composer {
  width: 100%;
  background: #fff;
  border: 1px solid var(--border-300);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.composer:focus-within {
  border-color: var(--text-400);
  box-shadow: var(--shadow-md);
}

.composer-input-area {
  padding: 16px 20px 8px;
}

.composer-input {
  width: 100%;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: 16px;
  color: var(--text-100);
  resize: none;
  line-height: 1.5;
  background: transparent;
}
.composer-input::placeholder { color: var(--text-400); }

.composer-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 12px;
}

.composer-toolbar-left {
  display: flex;
  align-items: center;
  gap: 2px;
}

.composer-toolbar-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.model-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: var(--fw-medium);
  color: var(--text-200);
  padding: 4px 8px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 0.12s;
}
.model-badge:hover { background: var(--bg-100); }
.model-badge svg { width: 14px; height: 14px; fill: currentColor; }

/* ─── Suggestion Chips ─── */
.suggestion-chips {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.suggestion-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-200);
  background: #fff;
  font-size: 14px;
  font-weight: var(--fw-medium);
  color: var(--text-200);
  cursor: pointer;
  transition: all 0.15s;
}
.suggestion-chip:hover { background: var(--bg-100); border-color: var(--border-300); }
.suggestion-chip svg { width: 18px; height: 18px; fill: currentColor; opacity: 0.75; }

/* ─── Scrollbar (hidden) ─── */
::-webkit-scrollbar { width: 0; }
</style>
</head>
<body>

<!-- SVG Symbols from Kit -->
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <symbol id="icon-sidebar" viewBox="0 0 20 20">
    <path d="M16.5 4A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zM7 15h9.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6V5z"></path>
  </symbol>
  <symbol id="icon-plus" viewBox="0 0 20 20">
    <path d="M10 3a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 .077 1.496l-.077.004h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 10 3"></path>
  </symbol>
  <symbol id="icon-search" viewBox="0 0 20 20">
    <path d="M8.5 2a6.5 6.5 0 0 1 4.935 10.728l4.419 4.419.064.078a.5.5 0 0 1-.693.693l-.079-.064-4.419-4.42A6.5 6.5 0 1 1 8.5 2m0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11"></path>
  </symbol>
  <symbol id="icon-chats" viewBox="0 0 20 20">
    <path d="M8.99962 2C12.3133 2 14.9996 4.68629 14.9996 8C14.9996 11.3137 12.3133 14 8.99962 14H2.49962C2.30105 13.9998 2.12113 13.8821 2.04161 13.7002C1.96224 13.5181 1.99835 13.3058 2.1334 13.1602L3.93516 11.2178C3.34317 10.2878 2.99962 9.18343 2.99962 8C2.99962 4.68643 5.68609 2.00022 8.99962 2ZM8.99962 3C6.23838 3.00022 3.99961 5.23871 3.99961 8C3.99961 9.11212 4.36265 10.1386 4.97618 10.9688C5.11884 11.1621 5.1035 11.4293 4.94004 11.6055L3.64512 13H8.99962C11.761 13 13.9996 10.7614 13.9996 8C13.9996 5.23858 11.761 3 8.99962 3Z"></path>
    <path d="M16.5445 9.72754C16.4182 9.53266 16.1678 9.44648 15.943 9.53418C15.7183 9.62215 15.5932 9.85502 15.6324 10.084L15.7369 10.3955C15.9073 10.8986 16.0006 11.438 16.0006 12C16.0006 13.1123 15.6376 14.1386 15.024 14.9687C14.8811 15.1621 14.8956 15.4302 15.0592 15.6064L16.3531 17H11.0006C9.54519 17 8.23527 16.3782 7.32091 15.3848L7.07091 15.1103C6.88996 14.9645 6.62535 14.9606 6.43907 15.1143C6.25267 15.2682 6.20668 15.529 6.31603 15.7344L6.58458 16.0625C7.68048 17.253 9.25377 18 11.0006 18H17.5006C17.6991 17.9998 17.8791 17.8822 17.9586 17.7002C18.038 17.5181 18.0018 17.3058 17.8668 17.1602L16.0631 15.2178C16.6554 14.2876 17.0006 13.1837 17.0006 12C17.0006 11.3271 16.8891 10.6792 16.6842 10.0742L16.5445 9.72754Z"></path>
  </symbol>
  <symbol id="icon-projects" viewBox="0 0 20 20">
    <path d="M15.8198 7C16.6885 7.00025 17.3624 7.73158 17.3178 8.57617L17.2993 8.74707L16.1332 15.7471C16.0126 16.4699 15.3865 16.9996 14.6538 17H5.34711C4.6142 16.9998 3.98833 16.47 3.86762 15.7471L2.7016 8.74707C2.54922 7.83277 3.25418 7 4.18109 7H15.8198ZM4.18109 8C3.87216 8 3.63722 8.27731 3.68793 8.58203L4.85394 15.582C4.89413 15.8229 5.10291 15.9998 5.34711 16H14.6538C14.8978 15.9996 15.1068 15.8228 15.1469 15.582L16.3129 8.58203L16.3188 8.46973C16.3036 8.21259 16.0899 8.00023 15.8198 8H4.18109Z"></path>
    <path d="M16.0004 5.5C16.0004 5.224 15.7764 5.00024 15.5004 5H4.50043C4.22428 5 4.00043 5.22386 4.00043 5.5C4.00043 5.77614 4.22428 6 4.50043 6H15.5004C15.7764 5.99976 16.0004 5.776 16.0004 5.5Z"></path>
    <path d="M14.5004 3.5C14.5004 3.224 14.2764 3.00024 14.0004 3H6.00043C5.72428 3 5.50043 3.22386 5.50043 3.5C5.50043 3.77614 5.72428 4 6.00043 4H14.0004C14.2764 3.99976 14.5004 3.776 14.5004 3.5Z"></path>
  </symbol>
  <symbol id="icon-artifacts" viewBox="0 0 20 20">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35352 3.1464L9.35352 6.14642C9.43935 6.25103 9.5 6.36003 9.5 6.50091C9.4998 6.6332 9.44704 6.75988 9.35352 6.85346L6.35352 9.85347C6.14584 10.0609 5.85611 10.0243 5.64648 9.85347L2.64648 6.85346C2.55296 6.75988 2.5002 6.6332 2.5 6.50091C2.5 6.36841 2.55285 6.24017 2.64648 6.14642L5.64648 3.1464C5.8552 2.97421 6.14635 2.93936 6.35352 3.1464ZM6 8.79194L3.70703 6.49994L6 4.20696L8.29297 6.49994L6 8.79194Z"></path>
    <path d="M16.8984 3.7509C16.9875 3.90632 16.986 4.09826 16.8955 4.25286L15.5791 6.49994L16.8955 8.74702C16.986 8.90159 16.9874 9.09354 16.8984 9.24898C16.8093 9.40436 16.643 9.49996 16.4638 9.49996H11.5C11.3198 9.49996 11.1532 9.4028 11.0644 9.24605C10.976 9.08949 10.9789 8.89736 11.0713 8.74312L12.417 6.49994L11.0713 4.25676C10.9789 4.1025 10.976 3.91037 11.0644 3.75383C11.1532 3.59717 11.3199 3.49992 11.5 3.49992H16.4638C16.6429 3.51309 16.8055 3.58909 16.8984 3.7509ZM13.4287 6.2431C13.5152 6.4107 13.5166 6.58638 13.4287 6.75678L12.3828 8.49995H15.5918L14.5683 6.75287C14.477 6.59683 14.477 6.40303 14.5683 6.24701L15.5918 4.49993H12.3828L13.4287 6.2431Z"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25293 10.9668C7.40708 10.8793 7.59647 10.8801 7.75 10.9687C7.90356 11.0574 7.99869 11.2211 8 11.3984L8.01074 12.8388L9.30762 13.6054C9.42811 13.6994 9.49994 13.8448 9.5 14C9.5 14.1773 9.40587 14.3418 9.25293 14.4316L8.01074 15.1601L7.99512 16.667C7.97406 16.8184 7.88446 16.9536 7.75 17.0312C7.59642 17.1199 7.40713 17.1207 7.25293 17.0332L6 16.3203L4.74707 17.0332C4.59287 17.1207 4.40358 17.1199 4.25 17.0312C4.09643 16.9425 4.00124 16.7789 4 16.6015L3.99023 15.1601L2.74707 14.4316C2.59413 14.3418 2.5 14.1773 2.5 14C2.50006 13.8448 2.57188 13.6994 2.69238 13.6054L3.99023 12.8388L4 11.3984C4.00131 11.2211 4.09644 11.0574 4.25 10.9687C4.40353 10.8801 4.59292 10.8793 4.74707 10.9668L6 11.6787L7.25293 10.9668ZM4.99512 12.2568L5.75293 12.6884C5.90608 12.7754 6.09392 12.7754 6.24707 12.6884L7.00586 12.2568L7.01172 13.1308C7.01308 13.3068 7.10706 13.4695 7.25879 13.5586L8.01172 14L7.25879 14.4414C7.10706 14.5304 7.01315 14.6932 7.01172 14.8691L7.00586 15.7422L6.24707 15.3115C6.09397 15.2246 5.90603 15.2246 5.75293 15.3115L4.99512 15.7422L4.98828 14.8691C4.98703 14.7152 4.91459 14.5716 4.79492 14.4785L3.98926 14L4.74121 13.5586C4.87421 13.4805 4.96267 13.3457 4.9834 13.1953L4.99512 12.2568Z"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C15.6568 11 16.9999 12.3432 17 14C17 15.6568 15.6569 17 14 17C12.3431 17 11 15.6568 11 14C11.0001 12.3432 12.3432 11 14 11ZM12 14C12.0001 12.8955 12.8955 12 14 12C15.1045 12 15.9999 12.8955 16 14C16 15.1045 15.1046 16 14 16C12.8954 16 12 15.1045 12 14Z"></path>
  </symbol>
  <symbol id="icon-code" viewBox="0 0 20 20">
    <path d="M11.6318 4.01757C11.898 4.09032 12.055 4.36555 11.9824 4.63183L8.98242 15.6318C8.90966 15.8981 8.63449 16.0551 8.36816 15.9824C8.10193 15.9097 7.94495 15.6345 8.01758 15.3682L11.0176 4.36816C11.0904 4.102 11.3656 3.94497 11.6318 4.01757Z"></path>
    <path d="M13.124 6.17089C13.3059 5.96325 13.6213 5.9423 13.8291 6.12402L17.8291 9.62402L17.9014 9.70215C17.9647 9.78754 18 9.89182 18 10C18 10.1441 17.9375 10.281 17.8291 10.376L13.8291 13.876L13.7471 13.9346C13.5449 14.0498 13.2833 14.011 13.124 13.8291C12.9649 13.6472 12.9606 13.3824 13.1016 13.1973L13.1709 13.124L16.7412 10L13.1709 6.87597C12.9632 6.69411 12.9422 6.37866 13.124 6.17089Z"></path>
    <path d="M6.25293 6.06542C6.45509 5.95025 6.71675 5.98908 6.87598 6.17089C7.03513 6.35279 7.03933 6.6176 6.89844 6.80273L6.8291 6.87597L3.25879 10L6.8291 13.124C7.03682 13.3059 7.05771 13.6213 6.87598 13.8291C6.69413 14.0369 6.37869 14.0578 6.1709 13.876L2.1709 10.376L2.09863 10.2979C2.03528 10.2124 2 10.1082 2 10C2.00005 9.85591 2.06247 9.71893 2.1709 9.62402L6.1709 6.12402L6.25293 6.06542Z"></path>
  </symbol>
  <symbol id="icon-customize" viewBox="0 0 20 20">
    <path d="M12.5 3A1.5 1.5 0 0 1 14 4.5V6h.5A3.5 3.5 0 0 1 18 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-13a1.5 1.5 0 0 1-1.492-1.347L2 15.5v-6A3.5 3.5 0 0 1 5.5 6H6V4.5A1.5 1.5 0 0 1 7.5 3zM3 15.5l.01.1a.5.5 0 0 0 .49.4h13a.5.5 0 0 0 .5-.5V12h-4v.5a.5.5 0 0 1-1 0V12H8v.5a.5.5 0 0 1-1 0V12H3zM5.5 7A2.5 2.5 0 0 0 3 9.5V11h4v-.5a.5.5 0 0 1 1 0v.5h4v-.5a.5.5 0 0 1 1 0v.5h4V9.5A2.5 2.5 0 0 0 14.5 7zm2-3a.5.5 0 0 0-.5.5V6h6V4.5a.5.5 0 0 0-.5-.5z"></path>
  </symbol>
  <symbol id="icon-chevron-down" viewBox="0 0 20 20">
    <path d="M14.128 7.165a.502.502 0 0 1 .744.67l-4.5 5-.078.07a.5.5 0 0 1-.666-.07l-4.5-5-.06-.082a.501.501 0 0 1 .729-.656l.075.068L10 11.752z"></path>
  </symbol>
  <symbol id="icon-plus-thin" viewBox="0 0 20 20">
    <path d="M10 3a.5.5 0 0 1 .5.5v6h6l.1.01a.5.5 0 0 1 0 .98l-.1.01h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 10 3"></path>
  </symbol>
  <symbol id="icon-microphone" viewBox="0 0 20 20">
    <path d="M15.5 8a.5.5 0 0 1 .5.5V9a6 6 0 0 1-5.5 5.977V17h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.023A6 6 0 0 1 4 9.001v-.5a.5.5 0 0 1 1 0V9a5 5 0 0 0 10 0v-.5a.5.5 0 0 1 .5-.5"></path>
    <path fill-rule="evenodd" d="M10 1.5a3 3 0 0 1 3 3V9a3 3 0 0 1-6 0V4.5a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2V9a2 2 0 0 0 4 0V4.5a2 2 0 0 0-2-2" clip-rule="evenodd"></path>
  </symbol>
  <symbol id="icon-voice" viewBox="0 0 21 21">
    <rect x="0" y="7.5" height="6" fill="currentColor" width="1" rx="0.5" ry="0.5"></rect>
    <rect x="4" y="5.5" height="10" fill="currentColor" width="1" rx="0.5" ry="0.5"></rect>
    <rect x="8" y="2.5" height="16" fill="currentColor" width="1" rx="0.5" ry="0.5"></rect>
    <rect x="12" y="5.5" height="10" fill="currentColor" width="1" rx="0.5" ry="0.5"></rect>
    <rect x="16" y="2.5" height="16" fill="currentColor" width="1" rx="0.5" ry="0.5"></rect>
    <rect x="20" y="7.5" height="6" fill="currentColor" width="1" rx="0.5" ry="0.5"></rect>
  </symbol>
  <symbol id="icon-download" viewBox="0 0 20 20">
    <path d="M10 3C10.2761 3 10.5 3.22386 10.5 3.5V12.1855L13.626 8.66797C13.8094 8.46166 14.1256 8.44275 14.332 8.62598C14.5383 8.80936 14.5573 9.12563 14.374 9.33203L10.374 13.832L10.2949 13.9033C10.21 13.9654 10.107 14 10 14C9.85718 14 9.72086 13.9388 9.62598 13.832L5.62598 9.33203L5.56738 9.25C5.45079 9.04872 5.48735 8.78653 5.66797 8.62598C5.84854 8.46567 6.1127 8.46039 6.29883 8.59961L6.37402 8.66797L9.5 12.1855V3.5C9.5 3.22386 9.72386 3 10 3Z"></path>
    <path d="M3.5 13C3.22386 13 3 13.2239 3 13.5V15.5C3 16.3284 3.67157 17 4.5 17H10V16H4.5C4.22386 16 4 15.7761 4 15.5V13.5C4 13.2239 3.77614 13 3.5 13Z"></path>
    <path d="M16.5 13C16.7761 13 17 13.2239 17 13.5V15.5C17 16.3284 16.3284 17 15.5 17H10V16H15.5C15.7761 16 16 15.7761 16 15.5V13.5C16 13.2239 16.2239 13 16.5 13Z"></path>
  </symbol>
  <symbol id="icon-edit" viewBox="0 0 20 20">
    <path d="M9.728 2.88a1.5 1.5 0 0 1 1.946-.847l2.792 1.1a1.5 1.5 0 0 1 .845 1.945l-3.92 9.953a1.5 1.5 0 0 1-.452.615l-.088.066-3.143 2.186a.75.75 0 0 1-1.135-.362l-.026-.095-.81-3.742a1.5 1.5 0 0 1 .071-.867zm-2.99 10.319a.5.5 0 0 0-.023.288l.73 3.376 2.835-1.971.058-.047a.5.5 0 0 0 .122-.18l2.637-6.698-3.721-1.466zm4.57-10.236a.5.5 0 0 0-.65.283L9.743 5.57l3.722 1.467.917-2.327a.5.5 0 0 0-.283-.648z"></path>
  </symbol>
  <symbol id="icon-globe" viewBox="0 0 20 20">
    <path d="M7.27 3.05a7.467 7.467 0 1 1-.018.007l.01-.004zm1.372 11.478a8 8 0 0 0-1.464 1.362 6.53 6.53 0 0 0 3.373.62 6.2 6.2 0 0 1-.969-.835 10 10 0 0 1-.94-1.147m4.515-1.993c-.626.13-1.275.323-1.93.581-.654.258-1.26.56-1.808.892.276.386.555.73.835 1.02.45.468.88.788 1.258.958.376.17.665.178.881.093.218-.085.425-.289.584-.67.16-.383.257-.91.267-1.558a9 9 0 0 0-.087-1.316M3.637 8.52a6.5 6.5 0 0 0 .285 3.876 6.5 6.5 0 0 0 2.433 3.027 9 9 0 0 1 1.772-1.674 16.4 16.4 0 0 1-1.243-2.52 16.5 16.5 0 0 1-.81-2.693 9 9 0 0 1-2.436-.016m12.444 3.864a8 8 0 0 0-2 .003c.07.523.103 1.02.096 1.48a6.2 6.2 0 0 1-.14 1.272 6.53 6.53 0 0 0 2.044-2.755M11.095 6.77c-.607.37-1.271.701-1.98.981s-1.423.49-2.119.633c.165.79.417 1.638.757 2.5s.733 1.653 1.151 2.344c.607-.37 1.272-.701 1.982-.981s1.422-.49 2.117-.634a15.6 15.6 0 0 0-.756-2.499 15.6 15.6 0 0 0-1.152-2.344m2.548-2.194a9 9 0 0 1-1.77 1.674c.457.751.881 1.602 1.243 2.521.362.92.633 1.83.81 2.692a9 9 0 0 1 2.435.016 6.5 6.5 0 0 0-.282-3.875 6.5 6.5 0 0 0-2.436-3.028m-7.681.286a6.53 6.53 0 0 0-2.044 2.753c.603.08 1.279.082 1.999-.002-.07-.523-.1-1.02-.094-1.48a6.2 6.2 0 0 1 .139-1.27m2.526-.85c-.376-.17-.665-.177-.883-.091s-.423.288-.583.669c-.16.383-.256.91-.266 1.557a9 9 0 0 0 .086 1.316c.627-.13 1.276-.321 1.93-.58.655-.257 1.26-.561 1.807-.893a9 9 0 0 0-.833-1.02c-.45-.468-.88-.787-1.258-.957m4.334.096a6.53 6.53 0 0 0-3.372-.62c.328.224.654.506.969.834q.48.5.94 1.147a8 8 0 0 0 1.464-1.362"></path>
  </symbol>
  <symbol id="icon-skills" viewBox="0 0 20 20">
    <path d="M13.04 7.304a.5.5 0 0 1 .92.392C13.665 8.386 13.089 9 12.3 9c-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.234-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696a.5.5 0 0 1 .92 0c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696"></path>
    <path fill-rule="evenodd" d="M14 3a2 2 0 0 1 2 2v8h1.5a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4H4a1 1 0 0 0-.745 1.667.5.5 0 0 1-.745.666A2 2 0 0 1 4 3zM6 15a1 1 0 1 0 2 0v-1.5a.5.5 0 0 1 .5-.5H15V5a1 1 0 0 0-1-1H6zm3 0c0 .365-.1.706-.27 1H16a1 1 0 0 0 1-1v-1H9z" clip-rule="evenodd"></path>
  </symbol>
  <!-- Claude starburst mark -->
  <symbol id="icon-claude-mark" viewBox="0 0 100 100">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"></path>
  </symbol>
  <!-- Bell / notification -->
  <symbol id="icon-bell" viewBox="0 0 20 20">
    <path d="M10 2a5.5 5.5 0 0 1 5.5 5.5v2.586l1.354 1.353a.5.5 0 0 1 .146.354V13a.5.5 0 0 1-.5.5H3.5A.5.5 0 0 1 3 13v-1.207a.5.5 0 0 1 .146-.354L4.5 10.086V7.5A5.5 5.5 0 0 1 10 2zm0 1A4.5 4.5 0 0 0 5.5 7.5v2.793l-1.354 1.353-.146.147V12.5h12v-.707l-.146-.147L14.5 10.293V7.5A4.5 4.5 0 0 0 10 3zm-2 12a2 2 0 0 0 4 0H8z"></path>
  </symbol>
</svg>

<div class="app">

  <!-- ─── SIDEBAR ─── -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="sidebar-brand-name">Claude</span>
      <button class="icon-btn">
        <svg><use href="#icon-sidebar"/></svg>
      </button>
    </div>

    <nav class="sidebar-nav">
      <a class="nav-item">
        <svg><use href="#icon-plus"/></svg>
        New chat
      </a>
      <a class="nav-item">
        <svg><use href="#icon-search"/></svg>
        Search
      </a>
      <a class="nav-item">
        <svg><use href="#icon-chats"/></svg>
        Chats
      </a>
      <a class="nav-item">
        <svg><use href="#icon-projects"/></svg>
        Projects
      </a>
      <a class="nav-item">
        <svg><use href="#icon-artifacts"/></svg>
        Artifacts
      </a>
      <a class="nav-item">
        <svg><use href="#icon-code"/></svg>
        Code
        <span class="nav-item-badge">Upgrade</span>
      </a>
      <a class="nav-item">
        <svg><use href="#icon-customize"/></svg>
        Customize
      </a>
    </nav>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Recents</div>
      <div class="sidebar-recent-item">Plan a campaign calendar</div>
    </div>

    <div class="sidebar-footer">
      <div class="sidebar-footer-avatar">K</div>
      <div class="sidebar-footer-info">
        <div class="sidebar-footer-name">karo <span class="online-dot"></span></div>
        <div class="sidebar-footer-plan">Free plan</div>
      </div>
      <div class="sidebar-footer-actions">
        <button class="icon-btn">
          <svg><use href="#icon-download"/></svg>
        </button>
        <button class="icon-btn">
          <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"></path></svg>
        </button>
      </div>
    </div>
  </aside>

  <!-- ─── MAIN ─── -->
  <main class="main">

    <!-- Top bar -->
    <div class="top-bar">
      <div class="top-bar-center">
        <span style="color: var(--text-400);">Free plan</span>
        <span style="color: var(--text-400); margin: 0 2px;">·</span>
        <a style="color: var(--text-300);">Upgrade</a>
      </div>
      <div class="top-bar-right">
        <button class="icon-btn">
          <svg><use href="#icon-bell"/></svg>
        </button>
      </div>
    </div>

    <!-- Center content -->
    <div class="center-content">

      <!-- Greeting -->
      <div class="greeting">
        <div class="greeting-icon">
          <svg viewBox="0 0 100 100"><use href="#icon-claude-mark"/></svg>
        </div>
        <div class="greeting-text">Afternoon, karo</div>
      </div>

      <!-- Composer -->
      <div class="composer">
        <div class="composer-input-area">
          <textarea class="composer-input" rows="1" placeholder="How can I help you today?"></textarea>
        </div>
        <div class="composer-toolbar">
          <div class="composer-toolbar-left">
            <button class="icon-btn" style="color: var(--text-300);">
              <svg><use href="#icon-plus-thin"/></svg>
            </button>
          </div>
          <div class="composer-toolbar-right">
            <span class="model-badge">
              Sonnet 4.6
              <svg viewBox="0 0 20 20"><use href="#icon-chevron-down"/></svg>
            </span>
            <button class="icon-btn" style="color: var(--text-300);">
              <svg><use href="#icon-microphone"/></svg>
            </button>
            <button class="icon-btn" style="color: var(--text-300);">
              <svg viewBox="0 0 21 21"><use href="#icon-voice"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Suggestion chips -->
      <div class="suggestion-chips">
        <span class="suggestion-chip">
          <svg viewBox="0 0 20 20"><use href="#icon-edit"/></svg>
          Write
        </span>
        <span class="suggestion-chip">
          <svg viewBox="0 0 20 20"><use href="#icon-globe"/></svg>
          Learn
        </span>
        <span class="suggestion-chip">
          <svg viewBox="0 0 20 20"><use href="#icon-code"/></svg>
          Code
        </span>
        <span class="suggestion-chip">
          <svg viewBox="0 0 20 20"><use href="#icon-skills"/></svg>
          Life stuff
        </span>
        <span class="suggestion-chip">
          <svg viewBox="0 0 100 100" style="width:14px;height:14px;"><use href="#icon-claude-mark"/></svg>
          Claude's choice
        </span>
      </div>

    </div>
  </main>
</div>

</body>
</html>
`;
