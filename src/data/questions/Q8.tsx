import React from 'react';
import { QuestionData } from '../types';

export const Q8: QuestionData = {
  id: 8,
  questionNumber: 8,
  question: (
    <div className="space-y-4">
      <p>Given the YAML:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`port_mapping:
  - 22:22
  - 80:80
  - 443:443`}
        </code>
      </div>
      <p>What will a typical YAML output for this?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`{"port_mapping": ["22:22", "80:80", "443:443"]}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`{"port_mapping": [1342, "80:80", "443:443"]}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`{"port_mapping": [1342, 4840, 26603]}`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`YAML parse error`}
        </code>
    </div>
    </span>,
  ],
  correctAnswer: 1, // Option B is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        Did you let a 'wtf' out yet? 
        <br/>
        Under YAML 1.1, values in the form <span className="text-orange-400 font-medium">MM:SS</span> with both parts between 0 and 59 (e.g., <span className="text-orange-400 font-medium">22:22</span>) are parsed as sexagesimal (base 60) integers (<span className="text-orange-400 font-medium">22×60 + 22 = 1342</span>), while values like <span className="text-orange-400 font-medium">80:80 </span> 
        and <span className="text-orange-400 font-medium">443:443</span> remain strings; 
        although YAML 1.2 silently removed this arcane feature.
      </p>
    </div>
  ),
}; 