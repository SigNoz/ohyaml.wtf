import React from 'react';
import { QuestionData } from '../types';

export const Q16: QuestionData = {
  id: 16,
  questionNumber: 16,
    question: (
    <div className="space-y-4">
      <p>Let's look at some helm templating questions.</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`settings:
  mode: {{ default "auto" .Values.mode }}
  replicas: {{ default 3 .Values.count }}`}
        </code>
      </div>
      <p>and the values file:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`mode: ""      
count: 0     `}
        </code>
      </div>
      <p>What is the rendered output?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`settings:
  mode: auto
  replicas: 3`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`settings:
  mode: ""
  replicas: 0`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`settings:
  mode: auto
  replicas: 0`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`settings:
  mode: "auto"
  replicas: 3`}
        </code>
    </div>
    </span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        Helm templates are not the easiest, but this one should've been a breeze, right? <br/>
        Helm's <span className="text-orange-400 font-bold">default returns the fallback when the value is "empty".</span> An empty string and the number 0 are both considered empty, so <span className="text-orange-400 font-bold">mode</span> becomes <span className="text-orange-400 font-bold">auto</span> and <span className="text-orange-400 font-bold">replicas</span> becomes <span className="text-orange-400 font-bold">3</span>.
      </p>
    </div>
  ),
}; 