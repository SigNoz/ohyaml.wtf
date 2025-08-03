import React from 'react';
import { QuestionData } from '../types';

export const Q12: QuestionData = {
  id: 12,
  questionNumber: 12,
    question: (
    <div className="space-y-4">
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`key:`}
        </code>
      </div>
      <p>What does this key map to?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`key: null`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`key: ""`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`key: {}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`# parse error`}
        </code>
    </div>
    </span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        In YAML, a key with nothing after the colon is interpreted as having a <span className="text-orange-400 font-bold">null value</span>. So <span className="text-orange-400 font-bold">key:</span> is equivalent to <span className="text-orange-400 font-bold">
          key: null</span> (YAML uses <span className="text-orange-400 font-bold">null</span> for "no value"). 
          It does <strong>not</strong> become an empty string unless you explicitly provide <span className="text-orange-400 font-bold">""</span>. The YAML 1.1 spec example shows <span className="text-orange-400 font-bold">key:</span> yields a <span className="text-orange-400 font-bold">!!null</span> value.
      </p>
    </div>
  ),
}; 