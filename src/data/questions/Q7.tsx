import React from 'react';
import { QuestionData } from '../types';

export const Q7: QuestionData = {
  id: 7,
  questionNumber: 7,
  question: (
    <div className="space-y-4">
      <p>What is the final value of <code className="text-orange-400">basket</code>?</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`fruit: &f "apple"
basket:
  - orange
  - *f
  - &f banana
  - *f`}
        </code>
      </div>
      After parsing, what does the result look like?
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`basket:
  - orange
  - apple
  - banana
  - banana`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`basket:
  - orange
  - apple
  - banana
  - apple`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`basket:
  - orange
  - *f
  - *f
  - *f`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`basket:
  - orange
  - apple
  - apple
  - apple`}
        </code>
    </div>
    </span>,
  ],
  correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        Let's dissect this part by part <br/>
        Initially <span className="text-orange-400 font-medium">*f</span> is <span className="text-orange-400 font-medium">"apple"</span>.
        The alias <span className="text-orange-400 font-medium">*f</span> in the second item uses the first definition, so it's <span className="text-orange-400 font-medium">"apple"</span>.
        Then the anchor is <strong>redefined</strong> to <span className="text-orange-400 font-medium">"banana"</span> (YAML allows later redefinitions).
        The last <span className="text-orange-400 font-medium">*f</span> resolves to the new anchor value <span className="text-orange-400 font-medium">"banana"</span>.
        
      </p>
    </div>
  ),
}; 