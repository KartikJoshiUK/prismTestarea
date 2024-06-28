import React, { useRef, useState } from "react";
import { Highlight, themes, PrismTheme } from "prism-react-renderer";

export interface EditorProps {
  value: string;
  onValueChange: (value: string) => void;
  padding?: number;
  className?: string;
  language: string;
}

export const languages = [
  { name: "Python", id: "python" },
  {name : "React JSX", id : "jsx"},
  {name : "React TSX", id : "tsx"},
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
}: EditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onValueChange(newValue);
  };

  return (
    <div className={`${className ?? ""} relative box-border`} style={{ height: "100%" }}>
      <Highlight theme={themes.vsDark as PrismTheme} code={value} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            ref={preRef}
            className={`${className} w-full h-full whitespace-pre-wrap break-words break-keep relative overflow-auto rounded-md`}
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
              className="w-full h-full absolute top-0 left-0 whitespace-pre-wrap break-words caret-white resize-none break-keep bg-transparent outline-none overflow-hidden"
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
              }}
            />
          </pre>
        )}
      </Highlight>
    </div>
  );
}
