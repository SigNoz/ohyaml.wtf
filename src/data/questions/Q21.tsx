import React from 'react';
import { QuestionData } from '../types';

export const Q21: QuestionData = {
  id: 21,
  questionNumber: 21,
    question: (
    <div className="space-y-4">
      <p>Take a look at the below file.</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`# manifests-endpoints.yaml
serve:
  - /healthz
  - *html          
  - /index.html
  - /favicon.ico
  - *png`}
        </code>
      </div>
      <p>You run:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`kubectl apply -f manifests-endpoints.yaml`}
        </code>
      </div>
      <p>What do you think happens now?</p>
    </div>
  ),
  options: [
    <span>The manifest is accepted; serve becomes ["/healthz", "/index.html", "/index.html"]</span>,
    <span>YAML parse error: unknown anchor 'html' referenced</span>,
    <span>The manifest is accepted; unresolved aliases are treated as literal strings like *html</span>,
    <span>The manifest is accepted, but unresolved aliases are silently converted to null</span>,
  ],
  correctAnswer: 1, // Option B is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        In YAML, an alias (<span className="text-orange-400 font-bold">*html</span>) must reference an anchor 
        (<span className="text-orange-400 font-bold">&html</span>) defined earlier in the same document. 
        Since <span className="text-orange-400 font-bold">*html</span> appears before any such anchor, 
        the parser raises an <span className="text-orange-400 font-bold"> unknown anchor error and stops processing. </span> 
        The file never reaches the Kubernetes API.
      </p>
    </div>
  ),
}; 