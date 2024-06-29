import React, { useState } from "react";
import Editor, { languages } from "./Editor";
import { PrismTheme, themes } from "prism-react-renderer";
import defaultText from "./constants/defaultText";
import Languages from "./components/Languages";
import Themes from "./components/Themes";
import Header from "./components/Header";

interface CodeEditorProps {}

export default function CodeEditor({}: CodeEditorProps) {
  const [code, setCode] = useState<string>(defaultText);
  const [language, setLanguage] = useState<string>("python");
  const [theme, setTheme] = useState<string>("dracula")

  return (
    <div className="bg-black p-6 h-screen overflow-auto">
      <Header/>
      <Languages value={language} onValueChange={setLanguage}/>
      <Themes value={theme} onValueChange={setTheme}/>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        language={language}
        theme={theme}
        padding={20}
        className="w-full max-h-[60vh] h-[600px] "
      />
    </div>
  );
}

