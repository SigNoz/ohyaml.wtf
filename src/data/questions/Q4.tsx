import React from 'react';
import { QuestionData } from '../types';

export const Q4: QuestionData = {
  id: 4,
  questionNumber: 4,
  question: (
    <div className="space-y-4">
      <p>Now that you're familiar with octals, give this one a try!</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`code: 095`}
        </code>
      </div>
      <p>What will this be parsed as?</p>
    </div>
  ),
  options: [
    <span>code: </span>,
    <span>code: 77</span>,
    <span>code: "095"</span>,
    <span>code: 95</span>,
  ],
  correctAnswer: 2, // Option B is correct
  explanation: (
    <div className="text-[14px]">
      <p>
        Haha. Did I catch you offguard? 
        <br />
        It's a fact that YAML 1.1 treats numbers starting with <span className="text-orange-400 font-medium">0 as octal</span>. 
        The sequence <span className="text-orange-400 font-medium">09</span> is not a valid number in YAML 1.1 (it’s an invalid octal literal, cuz it's 9!). YAML, therefore, falls back to interpreting it as a plain string. 
        So code remains the string <span className="text-orange-400 font-medium">"09"</span>.
        </p>
    </div>
  ),
}; 