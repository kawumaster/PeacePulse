# PeacePulse — Project Summary

**Track:** Stability & Social Cohesion  
**Tagline:** Detect early. Verify. Respond. Prevent conflict.

PeacePulse is a people-centred proof of concept designed around a community information problem: early signs of neighbourhood conflict can be difficult to report, understand, verify and connect to a trusted response.

**Core flow:** Report → AI Triage → Human Verification → Alert → Mediation → Resolution.

A resident can report a concern, including through an anonymous option. AI-style triage identifies risk indicators and suggests a priority. It is decision support only: it does not determine guilt, accuse individuals, or replace human responders or emergency services.

A community responder reviews the report before it can become a verified community alert. This human-verification boundary is central to the trust model. The prototype also includes community alerts, mediation/resolution tracking, youth and parent/guardian safety resources, role-based simulated access, audit activity and an illustrative privacy-preserving risk map.

**Information sources and accuracy:** The concept and problem framing come from the project creator's stated community problem and intended users. The OSF × Andela capstone brief guides the requirements around trustworthy, accessible, privacy-conscious and actionable civic information. The prototype separates unverified reports from verified alerts through human review. A production version should connect workflows to trusted local responders and current civic/service information, with timestamps and audit trails.

**AI tools:** AI software development tools were used as implementation support for coding, iteration, testing ideas and documentation. The underlying community problem, target users, workflow concept and PeacePulse capstone idea were defined by the project creator. AI is deliberately limited to triage/decision support.

**Trust, safety and privacy:** Anonymous reporting is supported; human verification is required before verified alerts; the illustrative map uses broad zones rather than exact addresses or individual identities; and immediate-danger guidance directs users to appropriate emergency/trusted support. Production deployment would require secure backend storage, real authentication and authorization, encryption, privacy and retention controls, abuse prevention, monitoring and responsible AI evaluation.

**Limitations:** This is a proof of concept, not a production emergency-reporting service. The current demo uses browser-side storage/simulated access, and demo incidents are synthetic. No real-world impact statistics are claimed.

**Next steps:** Secure backend infrastructure; real authentication; multilingual and low-bandwidth access; trusted local information integrations; community co-design; safety testing; and responsible AI evaluation before deployment.