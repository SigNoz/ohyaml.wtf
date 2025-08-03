import React from 'react';
import { QuestionData } from '../types';

export const Q17: QuestionData = {
  id: 17,
  questionNumber: 17,
    question: (
    <div className="space-y-4">
      <p>Given a helm template:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`debug: {{ if .Values.debug }} enabled {{ else }} 
         disabled {{ end }}`}
        </code>
      </div>
      <p>Values file:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`debug: "false"`}
        </code>
      </div>
      <p>What is the rendered output?</p>
    </div>
  ),
  options: [
    <span>debug: enabled</span>,
    <span>debug: disabled</span>,
    <span>debug: false</span>,
    <span>debug: "false"</span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        Well, this was a trap!
        <br/>
        In Helm templates, any non-empty string is truthy. The value <span className="text-orange-400 font-bold">"false"</span> is a string, not a boolean, so the condition is true and the output is <span className="text-orange-400 font-bold">debug: enabled</span>.
      </p>
    </div>
  ),
}; 