import React from 'react';
import { QuestionData } from '../types';

export const Q15: QuestionData = {
  id: 15,
  questionNumber: 15,
    question: (
    <div className="space-y-4">
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`config: |
  username: admin
  password: 1234`}
        </code>
      </div>
      <p>How is the value of config interpreted?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config: "username: admin\\npassword: 1234\\n"`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config:
  username: admin
  password: 1234`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config: "username: admin password: 1234"`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config: |
  username: admin
  password: 1234`}
        </code>
    </div>
    </span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        The literal block style <span className="text-orange-400 font-bold">|</span> preserves newlines exactly as written, producing a <strong>single string</strong> with <span className="text-orange-400 font-bold">\n</span> between lines and a trailing <span className="text-orange-400 font-bold">\n</span> at the end. 
      </p>
    </div>
  ),
}; 