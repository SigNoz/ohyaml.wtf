import React from 'react';
import { QuestionData } from '../types';

export const Q3: QuestionData = {
  id: 3,
  questionNumber: 3,
  question: (
    <div className="space-y-4">
      <p>Let's notch it up a bit.</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`permissions: 0755`}
        </code>
       
      </div>
      <p>What does this value become after parsing?</p>
    </div>
  ),
  options: [
    <span>permissions: 493</span>,
    <span>permissions: "0755"</span>,
    <span>permissions: 755</span>,
    <span>permissions: 0o755</span>,
  ],
  correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="text-[14px]">
     Tricky much?
     <br />
     Here comes the trap of octal numbers. YAML 1.1 treats numbers starting with <span className="text-orange-400 font-medium">0 as octal</span>. 
     <span className="text-orange-400 font-medium"> 0755</span> in octal equals <span className="text-orange-400 font-medium">493</span> in decimal. So the parser will load this into memory as the integer <span className="text-orange-400 font-medium">493</span>. 
     When re-serialised (or fed to the API), it appears as <span className="text-orange-400 font-medium">493</span>. This is why it is suggested to use decimal or the YAML 1.2 format <span className="text-orange-400 font-medium">(0o755) </span>
     for file modes. 
     
    </div>
  ),
}; 