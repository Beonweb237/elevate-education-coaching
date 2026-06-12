# Education / Coaching Website Template — Execution Plan

## Overview
Build a premium, market-ready education/coaching website template using the web-template-library skill and vibecoding-webapp-swarm multi-agent workflow. The template targets professionals seeking skill development and coaching services.

## Stage 1: Init Project (Main Agent)
- Read vibecoding-webapp-swarm SKILL.md
- Read webapp-building-swarm SKILL.md for init scripts
- Run init-webapp.sh to scaffold the project
- Gather research: education/coaching website best practices

## Stage 2: Design (Pro_Designer Subagent)
- Create comprehensive design documents in /mnt/agents/output/design/
- Design system: warm, intellectual palette per sector spec
- Global design doc + per-page designs for all 10 pages
- Asset manifest with image/video generation prompts

**Pages:**
1. Home — Inspiring hero + program highlights + success stories + stats + CTA
2. Programs — Course catalog with filtering by topic, level, duration
3. Program Detail — Curriculum + instructor + outcomes + pricing + enrollment CTA
4. Corporate Training — Custom programs for teams + inquiry form
5. Instructors — Faculty/coach profiles with credentials
6. Success Stories — Alumni testimonials and career outcomes
7. About — Mission + methodology + history + accreditation
8. Resources — Free guides + webinars + blog + podcast
9. Events — Upcoming workshops + masterclasses + open days
10. Contact — Inquiry form + phone + location

## Stage 3: Scaffold (Single Subagent)
- Generate all media assets (images, videos)
- Implement landing/home page completely
- Create shared components: Navbar, Footer, Layout
- Set up HashRouter with route stubs
- Configure Tailwind theme, fonts, global CSS

## Stage 4: Parallel Page Implementation (4-6 Subagents)
Group pages for parallel implementation:
- **Group A**: Programs + Program Detail
- **Group B**: Corporate Training + Instructors + Success Stories
- **Group C**: About + Resources + Events
- **Group D**: Contact page + shared utilities

## Stage 5: Merge, Build & Deploy (Main Agent)
- Octopus merge all branches
- Wire routes in App.tsx
- Build and fix any errors
- Copy dist and deploy
- STOP (no verification loop)
