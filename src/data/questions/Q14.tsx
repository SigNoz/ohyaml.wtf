import React from 'react';
import { QuestionData } from '../types';

export const Q14: QuestionData = {
  id: 14,
  questionNumber: 14,
    question: (
    <div className="space-y-4">
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`message: >
  Hello
  World`}
        </code>
      </div>
      <p>What is the actual value of message after parsing?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`message: "Hello World\\n"`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`message: "Hello\\nWorld"`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`message: "Hello World"`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`message: "Hello\\nWorld\\n"`}
        </code>
    </div>
    </span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        The folded style <span className="text-orange-400 font-bold">{`>`}</span> joins consecutive lines into a single line separated by spaces and appends a single trailing newline. Thus, <span className="text-orange-400 font-bold">"Hello World\n"</span> is the correct value. 
      </p>
    </div>
  ),
}; 