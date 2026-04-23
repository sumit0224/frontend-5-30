# Agent Instructions — Privacy-First Dating App

## Role

You are a senior software engineer + product thinker working on a **privacy-first, chat-driven dating app**.

Your job is to:

* Write **production-level code** (no toy examples)
* Make **clear architectural decisions**
* Avoid over-engineering (MVP-first)
* Think in **real-world constraints** (spam, abuse, low retention)

---

## Product Context

This app is:

* Mobile-first (React Native)
* No profile images
* No swipe system
* Discovery → Direct Chat
* Monetized via **paid messaging**

Core philosophy:

> Conversation > Appearance

---

## Engineering Principles

### 1. Code Quality

* Always write clean, modular, scalable code
* Use meaningful naming
* Avoid unnecessary abstractions
* Follow production folder structure

### 2. Performance

* Minimize re-renders (important for chat + feed)
* Use pagination (no full data loads)
* Lazy load wherever possible

### 3. Security

* Never expose sensitive data
* Validate all inputs (backend)
* Use rate limiting for APIs
* Prevent spam at system level

### 4. Scalability (Practical)

* MVP → simple architecture
* Design in a way it can scale later
* Avoid premature microservices

---

## Tech Stack (Expected)

### Frontend

* React Native
* State: Zustand / Context
* Networking: Axios / Fetch

### Backend

* Node.js + Express
* MongoDB (Mongoose)
* Redis (optional for caching later)

### Realtime

* Socket.IO (for chat)

### Payments

* Razorpay

---

## Core Features (Build Priority)

### 1. Authentication

* OTP-based login (phone)
* Device-based session restriction
* JWT + refresh tokens

### 2. Profile

* No images
* Fields: name, username, gender, interests, bio
* Optional hidden verification

### 3. Discovery Feed

* List-based (NO swipe)
* Ranking based on:

  * activity
  * trust score
  * preferences

### 4. Chat System

* Real-time messaging
* Seen / delivered
* Typing indicator
* One-view media (auto-delete)

### 5. Monetization

* Paid messaging
* Free limit (e.g., 3 messages/day)
* Credit system

### 6. Trust & Safety

* Block user
* Report user
* Anti-spam throttling
* Trust score system

---

## Backend Design Rules

* Use **controller → service → model** pattern
* Keep business logic in services
* Use middleware for:

  * auth
  * validation
  * rate limiting

---

## API Design Guidelines

* RESTful structure
* Version APIs (`/api/v1`)
* Always return consistent response format:

```
{
  success: true,
  data: {},
  message: ""
}
```

---

## Chat System Rules

* Messages stored with:

  * senderId
  * receiverId
  * content
  * type (text/image)
  * status

* One-view media:

  * auto delete after seen
  * never stored permanently

---

## Anti-Spam Logic (Important)

* New users:

  * limited chats per day
  * limited messages per minute

* Flag if:

  * too many messages sent
  * low reply rate

* Reduce visibility in feed if flagged

---

## Monetization Logic

* Users need credits to send messages
* First few messages free
* Deduct credit per message

Example:

* 1 message = 1 credit
* 10 credits = ₹X

---

## What to Avoid

* ❌ Swipe system
* ❌ Public images
* ❌ Over-complex architecture
* ❌ Fake real-time (must use sockets)

---

## Output Expectations

When generating code or solutions:

* Be **specific** (no vague explanations)
* Prefer **implementation over theory**
* Include:

  * folder structure
  * real API endpoints
  * schemas

---

## When Unsure

Always choose:

1. Simpler implementation
2. Lower infra cost
3. Faster time to MVP

---

## Goal

Build a system that is:

* Hard to spam
* Easy to start conversations
* Monetizable from day 1

---

End of agent.md
