import React from 'react';
import { QuestionData } from '../types';

export const Q18: QuestionData = {
  id: 18,
  questionNumber: 18,
    question: (
    <div className="space-y-4">
      <p>Notching it up a bit.</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`config:
{{ .Values.extra | toYaml }}`}
        </code>
      </div>
      <p>values.yaml:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`extra:
  key: value`}
        </code>
      </div>
      <p>What problem occurs in the rendered output?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config:
key: value`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config:
  key: value`}
        </code>
    </div>
    </span>,
    <span><div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config: key: value`}
        </code>
    </div></span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`config:
  key: value
  config: null`}
        </code>
    </div>
    </span>,
  ],
      correctAnswer: 0, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
       In Helm templates the <span className="text-orange-400 font-bold">toYaml function</span> converts a given value (object, map, or list) into a YAML‑formatted string. 
       <br/>
       Without piping to <span className="text-orange-400 font-bold">indent 2</span> or <span className="text-orange-400 font-bold">nindent 2</span>, the resulting YAML places <span className="text-orange-400 font-bold">
        key: value</span> at the same level as <span className="text-orange-400 font-bold">config:</span>, making the file invalid.
      </p>
    </div>
  ),
}; 