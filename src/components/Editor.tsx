import '../index.css';

import {
  BubbleMenu,
  EditorContent,
  useEditor,
  FloatingMenu,
} from "@tiptap/react";
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
  RxChevronDown,
  RxChatBubble,
  RxUnderline,
} from "react-icons/rx";
import { BubbleButton } from "./BubbleButton";

import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";

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
      Underline,
      // BubbleMenu.configure({
      //   element: document.querySelector(".menu"),
      // }),
      Placeholder.configure({
        placeholder: "Press '/' for commands...",
      }),
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
      {/* Floating Menu */}
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === "/";
          }}
          className="bg-zinc-700 py-2 px-1 shadow-xl border border-zinc-600 shadow-black/20 rounded-md overflow-hidden flex flex-col transition"
        >
          <button className="flex items-center gap-2 py-1 px-2 rounded min-2-[280px] hover:bg-zinc-600 transition">
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 border border-zinc-600 rounded"
            />

            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text.
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}

      {/* Bubble Menu */}
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl  shadow-black/20 rounded-md overflow-hidden flex divide-x divide-zinc-600 transition"
          editor={editor}
          tippyOptions={{ duration: 100 }}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="h-4 w-4 " />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="h-4 w-4 " />
            Comment
          </BubbleButton>

          <div className="flex items-center ">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="h-4 w-4 " />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="h-4 w-4 " />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              data-active={editor.isActive("underline")}
            >
              <RxUnderline className="h-4 w-4 " />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="h-4 w-4 " />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="h-4 w-4 " />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}

      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet "
      />
    </>
  );
}
