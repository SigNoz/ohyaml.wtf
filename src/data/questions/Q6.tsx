import React from 'react';
import { QuestionData } from '../types';

export const Q6: QuestionData = {
  id: 6,
  questionNumber: 6,
  question: (
    <div className="space-y-4">
      <p> Now we are getting into the dreaded Anchor and Alias part of it!</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`baseList: &fruits
    - apple
    - banana

salad:
    - orange
    - *fruits`}
        </code>
      </div>
      <p>What will this parse as?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`salad:
    - orange
    - apple
    - banana`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`salad:
  - orange
  baseList:
    - apple
    - banana`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`salad: ["orange", "apple", "banana"]`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`salad: 
 -  orange
  - [apple, banana]`}
        </code>
    </div>
    </span>,
  ],
  correctAnswer: 3, // Option B is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
       Quite basic, right?
       <br />
       The alias <span className="text-orange-400 font-medium">*fruits</span> inserts the entire sequence
        as a single item in the outer sequence. 
        So salad becomes a two-element list: first element "orange", second element is the list ["apple", "banana"]. 
        <span className="text-orange-400 font-medium"> YAML does not automatically concatenate or merge sequences via anchors. </span> Anchors/aliases work by reference, mainly for mappings.
        Option A shows a flattened list (which is not what happens without additional processing).
      </p>
    </div>
  ),
}; 