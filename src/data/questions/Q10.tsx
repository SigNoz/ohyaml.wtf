import React from 'react';
import { QuestionData } from '../types';

export const Q10: QuestionData = {
  id: 10,
  questionNumber: 10,
    question: (
    <div className="space-y-4">
      <p>A build step loads this file using PyYAML with its default loader (which follows YAML 1.1 rules).</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`allow_postgres_versions:
  - 9.5.25
  - 9.6.24
  - 10.23
  - 12.13`}
        </code>
      </div>
      <p>What Python object will be produced after parsing?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`{"allow_postgres_versions": 
        ["9.5.25", "9.6.24", "10.23", "12.13"]}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`{"allow_postgres_versions": 
        ["9.5.25", "9.6.24", 10.23, 12.13]}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`{"allow_postgres_versions": 
        [9.5.25, 9.6.24, 10.23, 12.13]}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`Parser error — "invalid version literals"`}
        </code>
    </div>
    </span>,
  ],
  correctAnswer: 1, // Option B is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        With YAML 1.1, unquoted scalars containing a single dot are <span className="text-orange-400 font-bold">parsed as floats</span> and is valid (<span className="text-orange-400 font-bold">10.23</span>, <span className="text-orange-400 font-bold">12.13</span>), while those with two dots (e.g., <span className="text-orange-400 font-bold">9.5.25</span>, <span className="text-orange-400 font-bold">9.6.24</span>) are <span className="text-orange-400 font-bold">invalid as numbers</span> and remain plain strings. Thus, the resulting Python object has the first two values as strings and the last two as floats.
      </p>
    </div>
  ),
}; 