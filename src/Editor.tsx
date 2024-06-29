import React, { useCallback, useEffect, useRef, useState } from "react";
import { Highlight, themes, PrismTheme } from "prism-react-renderer";

export interface EditorProps {
  value: string;
  onValueChange: (value: string) => void;
  padding?: number;
  className?: string;
  language: string;
  theme? : string;
}
export type Language = { name: string; id: string };
export const languages = [
  { name: "Python", id: "python" },
  { name : "React JSX", id : "jsx"},
  { name : "React TSX", id : "tsx"},
  { name: "JavaScript", id: "javascript" },
  { name: "TypeScript", id: "typescript" },
  { name: "Java", id: "java" },
  { name: "C", id: "c" },
  { name: "C++", id: "cpp" },
  { name: "C#", id: "csharp" },
  { name: "PHP", id: "php" },
  { name: "Ruby", id: "ruby" },
  { name: "Swift", id: "swift" },
  { name: "Go", id: "go" },
  { name: "HTML", id: "markup" },
  { name: "CSS", id: "css" },
  { name: "SQL", id: "sql" },
  { name: "JSON", id: "json" },
  { name: "YAML", id: "yaml" },
  { name: "Markdown", id: "markdown" },
  { name: "Shell script", id: "bash" },
  { name: "XML", id: "xml" },
  { name: "Rust", id: "rust" },
  { name: "Kotlin", id: "kotlin" },
  { name: "Objective-C", id: "objectivec" },
  { name: "Scala", id: "scala" },
  { name: "Perl", id: "perl" },
  { name: "R", id: "r" }
];

export default function Editor({
  value,
  onValueChange,
  padding = 0,
  className,
  language,
  theme = "vsDark",
}: EditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onValueChange(newValue);
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = preRef.current?.scrollHeight +"px"
    }
  }, [value]);

  return (
      <Highlight theme={themes[theme] as PrismTheme} code={value} language={language}>
        {({ className : hightlightClasses, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            ref={preRef}
            className={`${hightlightClasses} w-full h-[600px] whitespace-pre-wrap break-words break-keep relative overflow-auto rounded-md rounded-tl-none [&>div]:pointer-events-none [&>div]:select-none ${className}`}
            style={{ ...style, padding }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
            <textarea
              ref={textareaRef}
              className="top-0 left-0 right-0 bottom-0 absolute whitespace-pre-wrap break-words caret-white resize-none break-keep outline-none overflow-hidden bg-transparent"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              value={value}
              onChange={handleChange}
              style={{
                MozOsxFontSmoothing: "grayscale",
                WebkitFontSmoothing: "antialiased",
                WebkitTextFillColor: "transparent",
                padding,
                height: preRef.current?.scrollHeight +"px"
              }}
            />
          </pre>
        )}
      </Highlight>
  );
}
