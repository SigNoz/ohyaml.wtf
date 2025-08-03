import React from 'react';
import { QuestionData } from '../types';

export const Q13: QuestionData = {
  id: 13,
  questionNumber: 13,
    question: (
    <div className="space-y-4">
      Here's a not-so-tricky one for you!
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`yes: true`}
        </code>
      </div>
      <p>How does YAML interpret this mapping?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`true: true`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`"yes": true`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`yes: true`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`Yes: True`}
        </code>
    </div>
    </span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        The unquoted key <span className="text-orange-400 font-bold">yes</span> is itself interpreted as boolean 
        <span className="text-orange-400 font-bold"> true</span>. Thus the parser sees it as 
        <span className="text-orange-400 font-bold"> true: true</span>. A mapping with a boolean key 
        <span className="text-orange-400 font-bold"> true</span> and boolean value <span className="text-orange-400 font-bold">true</span>. 
      </p>
    </div>
  ),
}; 