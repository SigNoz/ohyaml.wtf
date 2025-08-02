import React from 'react';
import { QuestionData } from '../types';

export const Q21: QuestionData = {
  id: 21,
  questionNumber: 21,
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
      <p>What will happen when this configuration is applied?</p>
    </div>
  ),
  options: [
    <span>The pod starts and runs, but the readiness probe never succeeds</span>,
    <span>The pod starts and runs, but the readiness probe never succeeds</span>,
    <span>The pod starts and runs, but the readiness probe never succeeds</span>,
    <span>The pod starts and runs, but the readiness probe never succeeds</span>,
  ],
  correctAnswer: 1, // Option B is correct
  explanation: (
    <div className="space-y-2">
      <p>
        This YAML defines a <code className="text-orange-400">geoblock_regions</code> array 
        containing country codes and city codes. Each item represents a region that will be 
        blocked from accessing the service.
      </p>
      <p>
        The <code className="text-orange-400">-</code> symbols indicate array items, 
        making this a valid array structure for geoblocking configuration.
      </p>
    </div>
  ),
}; 