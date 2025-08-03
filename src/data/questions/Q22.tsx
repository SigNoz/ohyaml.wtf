import React from 'react';
import { QuestionData } from '../types';

export const Q22: QuestionData = {
  id: 22,
  questionNumber: 22,
    question: (
    <div className="space-y-4">
      <p>Here's the final one. Check the below YAML file.</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`serve:
  - /robots.txt
  - /favicon.ico
  - !.git`}
        </code>
      </div>
      <p>You run the following Python code:</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`import yaml
yaml.safe_load(open("unknown-tag.yaml").read())`}
        </code>
      </div>
      <p>What happens when this code is executed?</p>
    </div>
  ),
  options: [
    <span><code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">{`serve: ["/robots.txt", "/favicon.ico", ""]`}</code></span>,
    <span><code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">{`serve: ["/robots.txt", "/favicon.ico", "git"]`}</code></span>,
    <span><code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">{`serve: ["/robots.txt", "/favicon.ico"]`}</code></span>,
    <span>ConstructorError: could not determine a constructor for the tag '!.git'</span>,
  ],
      correctAnswer: 3, // Option D is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        In YAML, <span className="text-orange-400 font-bold">!something</span> denotes a custom tag. PyYAML's <span className="text-orange-400 font-bold">safe_load</span> does not allow unknown tags for security reasons. When it encounters <span className="text-orange-400 font-bold">!.git</span>, it cannot find a constructor for this tag and raises a <span className="text-orange-400 font-bold">ConstructorError</span>, aborting the load.
      </p>
    </div>
  ),
}; 