import React from 'react';
import { QuestionData } from '../types';

export const Q19: QuestionData = {
  id: 19,
  questionNumber: 19,
    question: (
    <div className="space-y-4">
      <p>Here's a trickier one. Think twice!</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`metadata:
  name: {{ required "Name is required!" .Values.name }}`}
        </code>
      </div>
      
      <p>What happens when Helm renders this template, if .Values.name is not provided?</p>
    </div>
  ),
  options: [
    <span>The name field is omitted</span>,
    <span>Renders name: Name is required!</span>,
    <span>Renders name: null</span>,
    <span>Template rendering fails with error: "Name is required!"</span>,
  ],
      correctAnswer: 1, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        The <span className="text-orange-400 font-bold">required function stops rendering and throws the 
        given error </span> if the value is missing or empty. It does not insert the message as a value or produce YAML.
      </p>
    </div>
  ),
}; 