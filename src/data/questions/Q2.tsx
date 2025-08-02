import React from 'react';
import { QuestionData } from '../types';

export const Q2: QuestionData = {
  id: 2,
  questionNumber: 2,
  question: (
    <div className="space-y-4">
      <p>Let's make it more interesting. Below is a YAML configuration for a geoblocking feature.</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
          {`geoblock_regions:
    - us #united states
    - fr #france
    - no #norway
    - sf #san francisco
    - in #india
    - uk #united kingdom`}
        </code>
       
      </div>
      <p>What will be the result of this YAML configuration?</p>
    </div>
  ),
  options: [
    <span>The manifest is rejected with a YAML parse error, so the deployment never reaches Kubernetes.</span>,
    <span>The Pod starts, but your app crashes on startup.</span>,
    <span>Everything works as expected</span>,
    <span>The pod starts and runs, but the readiness probe never succeeds</span>,
  ],
  correctAnswer: 1, // Option A is correct
  explanation: (
    <div className="text-[14px]">
      Let's circle back to booleans.
      <br />
      If you look carefully, we see a <span className="text-orange-400 font-medium">no</span> for Norway. If we
      apply the spec we revised in the previous question, <span className="text-orange-400 font-medium">no</span> is interpreted as a boolean <span className="text-orange-400 font-medium">false</span>.
      At runtime, your application’s deserialization layer expects a string, encounters a boolean, throws a type‑mismatch error, and crashes, triggering a CrashLoopBackOff.
      <br />
      The problem is so common that it's famously identified as the <span className="text-orange-400 font-medium" style={{textDecoration: 'underline'}}>Norway problem</span>.
    </div>
  ),
}; 