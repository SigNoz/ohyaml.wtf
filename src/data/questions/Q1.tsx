import React from 'react';
import { QuestionData } from '../types';

export const Q1: QuestionData = {
  id: 1,
  questionNumber: 1,
  question: (
    <div className="space-y-4">
      <p>Let's start with something simple.</p>
      <div className="bg-[#343232]  rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base">
          confirm: yes
        </code>
      </div>
      <p>What do you think the above YAML will be parsed out as?</p>
    </div>
  ),
  options: [
    <span className="font-mono">confirm: yes</span>,
    <span className="font-mono">confirm: "yes"</span>,
    <span className="font-mono">confirm: true</span>,
    <span className="font-mono">confirm: on</span>,
  ],
  correctAnswer: 2, // Option B is correct
  explanation: (
    <div className="text-[14px]">
        Booleans can be tricky. <br/> Unquoted <code className="text-orange-400">yes</code> is interpreted as a boolean.
        To add to the mess, yes, no, on, off, y, n, Y, N, ON, OFF are all valid boolean values in YAML 1.1. This has been
        addressed in YAML 1.2, but it's still a mess.
        
      
    </div>
  ),
}; 