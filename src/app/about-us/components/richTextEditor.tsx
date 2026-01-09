"use client";

import { Toggle } from "@/components/ui/toggle";
import "./styles.scss";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from '@tiptap/extension-text-align';
import {
  Heading1,
  Heading2,
  Heading3,
  TextAlignStart,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Undo,
  Redo,
} from "lucide-react";


const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'ml-3 list-disc',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'ml-3 list-decimal',
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),      
    ],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[250px] mt-2 p-2 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto rounded-md border-2 border-[#6F4B16] focus:outline-[#C5A069]",
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML())
      // You can handle the updated HTML content here if needed
    }
  });

  return (
    <div className="mb-5 ">
      <p className="w-fit text-[#6F4B16] font-medium text-xl mb-1">
        Testimony*
      </p>
      <div className="group w-full h-auto border-2 border-[#6F4B16] focus:border-[#C5A069] rounded-md p-4 ">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export { RichTextEditor };

type MenuBarProps = {
  editor: any;
};

export const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  const menus = [
    {
      icon: <Heading1 className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <TextAlignStart className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <TextAlignCenter className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <TextAlignEnd className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <TextAlignJustify className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      pressed: editor.isActive({ textAlign: "justify" }),
    },
    {
      icon: <List className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },
    {
      icon: <Undo className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().undo().run(),
      pressed: false,
    },
    {
      icon: <Redo className="size-5" color="#6F4B16" />,
      onClick: () => editor.chain().focus().redo().run(),
      pressed: false,
    },
  ];

  return (
    <div className="border-2 border-[#6F4B16] rounded-md p-2 mb-1 bg-transparent space-x-2 z-50 ">
      {menus.map((menu, index) => (
        <Toggle
          pressed={menu.pressed}
          onPressedChange={menu.onClick}
          key={index}
          className="p-1 bg-[#ffddabe1] transition duration-300 ease-in-out hover:bg-transparent"
        >
          {menu.icon}
        </Toggle>
      ))}
    </div>
  );
};
``;
