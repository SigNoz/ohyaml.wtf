# Tracking Implementation Documentation

## Overview

This document describes the analytics tracking implementation for the OHYAML Quiz application. The tracking system captures user interactions and quiz progress to provide insights into user behavior and quiz performance.

## Technical Implementation

### Architecture

The tracking system consists of several key components:

1. **Core Utilities** (`src/utils/`)
   - `logEvent.ts` - Sends events to backend endpoint
   - `userUtils.ts` - Manages anonymous and user IDs using UUID
   - `getPageType.ts` - Determines page types for single-page app

2. **React Hook** (`src/hooks/useLogEvent.ts`)
   - Enhances events with browser metadata
   - Adds `custom_source: 'ohyamlquiz'` to all events
   - Collects: OS, timezone, referrer, user agent, webdriver detection

3. **Components** (`src/components/`)
   - `PageViewTracker` - Automatic page view tracking
   - `TrackingButton` - Click tracking wrapper for buttons
   - `TrackingLink` - Click tracking wrapper for links with A/B test support

### Data Collection

All events include these base attributes:
- `custom_source`: 'ohyamlquiz'
- `custom_os`: User's operating system
- `custom_timezone`: User's timezone
- `custom_initial_referrer`: Where user came from (stored in session)
- `custom_user_agent`: Browser user agent
- `custom_webdriver`: Bot detection flag
- `custom_headless`: Headless browser detection

## Currently Instrumented Events

### 1. Page Views
**Event**: `Website Page View`
- Fires on every virtual page change
- Attributes:
  - `pageLocation`: Virtual path (/, /question/1, /score)
  - `pageType`: 'landing', 'quiz', or 'results'

### 2. Quiz Started
**Event**: `Quiz Started`
- Fires when user clicks start button
- Attributes:
  - `isRetake`: boolean (true if user has completed quiz before)
  - `totalQuestions`: number of questions in quiz

### 3. Question Answered
**Event**: `Question Answered`
- Fires when user selects an answer
- Attributes:
  - `questionNumber`: Current question number (1-based)
  - `isCorrect`: Whether answer was correct
  - `selectedAnswer`: Index of selected option
  - `correctAnswer`: Index of correct option
  - `isRetake`: Whether this is a retake attempt

### 4. Quiz Completed
**Event**: `Quiz Completed`
- Fires when user finishes all questions
- Attributes:
  - `score`: Final score
  - `totalQuestions`: Total number of questions
  - `scorePercentage`: Score as percentage (0-100)
  - `isRetake`: Whether this was a retake

### 5. Quiz Restarted
**Event**: `Quiz Restarted`
- Fires when user clicks restart after viewing score
- Attributes:
  - `previousScore`: Score from attempt being restarted
  - `totalQuestions`: Total number of questions

## Analytics Questions This Can Answer

### User Engagement
- How many unique users take the quiz?
- What's the completion rate? (Started vs Completed)
- How many users retake the quiz?
- What's the average score on first attempt vs retakes?

### Traffic Sources
- Where are users coming from? (referrers)
- What percentage of traffic is organic vs referral?
- Are there bot/automated visitors?

### Quiz Performance
- Which questions are most frequently answered incorrectly?
- Is there a correlation between question number and correct answers?
- Do users perform better on retakes?
- What's the score distribution?

### User Behavior Patterns
- At which question do users most commonly drop off?
- How long do users spend on the quiz? (using timestamp differences)
- What times/days see the most quiz activity?
- What devices/OS are users on?

### Funnel Analysis
- Landing → Quiz Start conversion rate
- Quiz Start → Quiz Complete conversion rate
- Quiz Complete → Retake conversion rate

## Future Enhancement Opportunities

### Additional Events to Consider
1. **Time-based Metrics**
   - Time spent per question
   - Total quiz duration
   - Idle time detection

2. **Engagement Metrics**
   - "Show Explanation" clicks
   - Social sharing actions
   - Copy score/results actions

3. **Error Tracking**
   - Failed API calls
   - UI errors
   - Slow page loads

### Additional Attributes
- Session ID for better user journey tracking
- Question text/category for content analysis
- Device type (mobile/tablet/desktop)
- Screen resolution
- Network connection type

## Implementation Notes

- Uses localStorage for persistent anonymous ID (`app_anonymous_id`)
- Supports user identification when users log in (`app_user_id`)
- All tracking is async and non-blocking
- Failed tracking calls are caught and logged to console
- Environment variable `REACT_APP_TUNNEL_ENDPOINT` must be set