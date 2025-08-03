import React from 'react';
import { QuestionData } from '../types';

export const Q20: QuestionData = {
  id: 20,
  questionNumber: 20,
    question: (
    <div className="space-y-4">
      <p>Here's a values.yaml file:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`name: ""
count: 0`}
        </code>
      </div>
      <p>and the Helm template:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`metadata:
  name: {{ required "name is mandatory" 
  (default "guest" .Values.name) }}

replicas: {{ default 1 .Values.count }}`}
        </code>
      </div>
      <p>What happens when you run helm template with these values?</p>
    </div>
  ),
  options: [
    <span>Renders name: guest, replicas: 1</span>,
    <span>Renders name: "", replicas: 1</span>,
    <span>Error: "name is mandatory" (chart render fails)</span>,
    <span>Renders name: guest, then fails on replicas (0 treated as empty)</span>,
  ],
      correctAnswer: 2, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        The <span className="text-orange-400 font-bold">default</span> function would normally replace an empty 
        string with <span className="text-orange-400 font-bold">"guest"</span>, but the 
        <span className="text-orange-400 font-bold"> required</span> function checks whether the 
        original argument (<span className="text-orange-400 font-bold">.Values.name</span>) is non-empty. 
        Because <span className="text-orange-400 font-bold">.Values.name</span> is empty, 
        <span className="text-orange-400 font-bold"> required</span> throws an error before any YAML 
        is rendered. The replicas field is never evaluated.
        You can think of it as <span className="text-orange-400 font-bold">required function being more powerful than default</span>.
      </p>
    </div>
  ),
}; 