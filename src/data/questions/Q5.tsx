import React from 'react';
import { QuestionData } from '../types';

export const Q5: QuestionData = {
  id: 5,
  questionNumber: 5,
  question: (
    <div className="space-y-4">
      <p>Last one from this section!</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`config_value: 010`}
        </code>
      </div>
      <p>What will this value be parsed as by YAML 1.2?</p>
    </div>
  ),
  options: [
    <span>config_value: 8</span>,
    <span>config_value: 10</span>,
    <span>config_value: "010"</span>,
    <span>Parser error: leading zeros are not allowed</span>,
  ],
  correctAnswer: 1, // Option B is correct
  explanation: (
    <div className="space-y-2">
      <p>
        Okay, what happened here is, in YAML 1.2 this will be treated as 10 itself. 
        If we want to use octal, we need to use the 
        <span className="text-orange-400 font-medium"> 0o</span> prefix. :)
      </p>
    </div>
  ),
}; 