import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
// import BubbleMenu from "@tiptap/extension-bubble-menu";

import { lowlight } from "lowlight/lib/core";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/tokyo-night-dark.css";

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
} from "react-icons/rx";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      // BubbleMenu.configure({
      //   element: document.querySelector(".menu"),
      // }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl  shadow-black/20 rounded-md overflow-hidden flex divide-x divide-zinc-600 transition"
          editor={editor}
          tippyOptions={{ duration: 100 }}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 transition ${
              editor.isActive("bold") && "text-blue-500"
            }`}
          >
            <RxFontBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 transition ${
              editor.isActive("italic") && "text-blue-500"
            }`}
          >
            <RxFontItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 transition ${
              editor.isActive("strike") && "text-blue-500"
            }`}
          >
            <RxStrikethrough />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 transition ${
              editor.isActive("code") && "text-blue-500"
            }`}
          >
            <RxCode />
          </button>
        </BubbleMenu>
      )}

      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet "
      />
    </>
  );
}
