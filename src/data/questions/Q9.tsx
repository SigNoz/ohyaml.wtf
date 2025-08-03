import { QuestionData } from '../types';

export const Q9: QuestionData = {
  id: 9,
  questionNumber: 9,
  question: (
    <div className="space-y-4">
      <p>Staying on the same boat,</p>
      <div className="bg-[#343232] rounded-lg p-4">
        <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
{`durations:
  - 1:10      
  - 02:40    
  - 1:        
  - 0:0`}
        </code>
      </div>
      <p>What do you think this will be parsed as?</p>
    </div>
  ),
  options: [
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`[70, "02:40", "1:", "0:0"]`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`[70, 160, "1:0", 0]`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`[70, "02:40", "1:", 0]`}
        </code>
    </div>
    </span>,
    <span>
    <div className="bg-[#343232] rounded-lg p-4">
    <code className="text-orange-400 font-mono text-sm md:text-base whitespace-pre">
        {`YAML parse error`}
        </code>
    </div>
    </span>,
  ],
  correctAnswer: 2, // Option A is correct
  explanation: (
    <div className="space-y-2 text-[14px]">
      <p>
        I admit this was very wtf ish. If you got it right, you can pat yourself.
        <br/>
        In YAML 1.1, <span className="text-orange-400 font-bold">1:10</span> is parsed as a sexagesimal integer (<span className="text-orange-400 font-bold">1*60 + 10 = 70</span>), <span className="text-orange-400 font-bold">02:40</span> is treated as a 
        string because the leading zero disqualifies sexagesimal parsing, <span className="text-orange-400 font-bold">1:</span> is a plain scalar string, and <span className="text-orange-400 font-bold">0:0</span> is 
        parsed as integer <span className="text-orange-400 font-bold">0</span>. 
      </p>
    </div>
  ),
}; 