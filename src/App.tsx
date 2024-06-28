import React, { useState } from "react";
import Editor, { languages } from "./Editor";

interface CodeEditorProps {}

export default function CodeEditor({}: CodeEditorProps) {
  const [code, setCode] = useState<string>(`from employees import kartik, recruiter
 
export default function CodeEditor({}: CodeEditorProps) {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
def team_interaction():
    kartik.code_review()
    recruiter.give_feedback()
    kartik.implement_changes()
    recruiter_review = recruiter.evaluate_performance()
    kartik.show_enthusiasm()
    
    if recruiter_review == "Impressed":
        kartik.schedule_interview()
        recruiter.send_confirmation()

team_interaction()
`);
  const [language, setLanguage] = useState<string>("python");

  return (
    <div className="bg-black p-6 h-screen overflow-auto">
      <h1 className="text-center text-white py-4 font-bold flex items-center justify-center flex-col gap-2">
        <img src="/logo.jpg" className="rounded" alt="logo" width={100} height={100}/>
        <code className="font-mono">
          <a target="_blank" href="https://kartikjoshi.netlify.app" className="text-purple-300 underline">Kartik <span className="text-blue-300"> Joshi</span></a>
          <span className="text-green-300"> Code</span>
          <span className="text-yellow-300"> Editor</span>
        </code>
      </h1>
      <select
        className="bg-gray-700 text-white p-2 rounded-t-md"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        language={language}
        padding={20}
        className="w-full min-h-[60vh] resize-y"
      />
    </div>
  );
}

