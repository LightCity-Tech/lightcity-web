"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "mb-5 border-2 border-[#6F4B16] rounded-md p-4 min-h-[150px] prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:border-[#C5A069] focus:outline-none",
      },
    },
  });

  return (
    <div>
      <p className="w-fit text-[#6F4B16] font-medium text-xl mb-1">Testimony</p>
      <EditorContent editor={editor} />
    </div>
  );
};

export { RichTextEditor };
