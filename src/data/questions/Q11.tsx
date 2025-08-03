import React from 'react';
import { QuestionData } from '../types';

export const Q11: QuestionData = {
  id: 11,
  questionNumber: 11,
    question: (
    <div className="space-y-4">
      You are writing a K8s manifest which is as shown below.
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`# file: config.yaml
---
globals: &g
  replicas: 2
  mode: active
---
deploy:
  settings:
    <<: *g
    mode: passive`}
        </code>
      </div>
    </div>
  ),
  options: [
    <span>K8s accepts the second doc; <span className="text-orange-400 font-bold">deploy.settings</span> becomes <span className="text-orange-400 font-bold">{`{ replicas: 2, mode: passive }`}</span></span>,
    <span>The second document fails to parsebecause <span className="text-orange-400 font-bold">*g</span> cannot reference an anchor from a different document</span>,
    <span>The parser treats <span className="text-orange-400 font-bold">*g</span> as a plain string <span className="text-orange-400 font-bold">*g</span>; <span className="text-orange-400 font-bold">deploy.settings</span> is <span className="text-orange-400 font-bold">{`{ "<<": "*g", mode: passive }`}</span></span>,
    <span>Both documents merge automatically; <span className="text-orange-400 font-bold">globals</span> is folded into <span className="text-orange-400 font-bold">deploy.settings</span> and it becomes <span className="text-orange-400 font-bold">{`{ replicas: 2, mode: active }`}</span></span>,
  ],
  correctAnswer: 1, // Option B is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        Soo, <span className="text-orange-400 font-bold">anchors cannot cross --- document boundaries</span> (gotcha!).
         The alias <span className="text-orange-400 font-bold">*g</span> is undefined in the second doc, 
         so every YAML 1.1/1.2 parser throws an error before the manifest ever reaches the API server.
      </p>
    </div>
  ),
}; 