# Documenting Architecture Decisions

* **Status:** proposed
* **Date:** 2024-04-19
* **Deciders:** @faselbaum, @ChristianHoffmannS2, @angsherpa456
* **Informed:** @thrbnhrtmnn

## Context and Problem Statement
Excerpt from Michael Nygard - [DOCUMENTING ARCHITECTURE DECISIONS](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)

> Architecture for agile projects has to be described and defined differently. Not all decisions will be made at once, nor will all of them be done when the project begins.
> 
> Agile methods are not opposed to documentation, only to valueless documentation. Documents that assist the team itself can have value, but only if they are kept up to date. Large documents are never kept up to date. Small, modular documents have at least a chance at being updated.
> 
> Nobody ever reads large documents, either. Most developers have been on at least one project where the specification document was larger (in bytes) than the total source code size. Those documents are too large to open, read, or update. Bite sized pieces are easier for for all stakeholders to consume.
> 
> One of the hardest things to track during the life of a project is the motivation behind certain decisions. A new person coming on to a project may be perplexed, baffled, delighted, or infuriated by some past decision. Without understanding the rationale or consequences, this person has only two choices:
> 
> ### 1. Blindly accept the decision.
> 
> This response may be OK, if the decision is still valid. It may not be good, however, if the context has changed and the decision should really be revisited. If the project accumulates too many decisions accepted without understanding, then the development team becomes afraid to change anything and the project collapses under its own weight.
> 
> ### 2. Blindly change it.
> 
> Again, this may be OK if the decision needs to be reversed. On the other hand, changing the decision without understanding its motivation or consequences could mean damaging the project's overall value without realizing it. (E.g., the decision supported a non-functional requirement that hasn't been tested yet.)
> 
> It's better to avoid either blind acceptance or blind reversal.

## Decision Outcome

> **📍 Document architecture decisions in the repository**

We chose this option to ensure that decisions will not be overturned or accepted blindly. We want to provide collaborators with all the context needed to make well informed architectural decisions in the future. Remember: These decisions rarely stand on their own and will impact the course of other decisions throughout a projects lifecycle.

Since the target audience for these decision records consists primarily of software engineers, we chose to store those documents locally within the repository as Markdown files so that they are accessible together with the code which they shape.

To easily author, find and understand architectural decisions we adhere to a common format.

### Format Description
Each decision is documented in a separate folder inside [/docs/architecture/decisions](/docs/architecture/decisions) **OR** inside `/<package-name>/docs/architecture/decisions` if the decision is only relevant for that package.

#### Folder Name Format (regex)
```regex
(?<sequencenumber>\d{3})(?<dash>-)(?<shorttitle>.+)
```

Note: The `sequencenumber` is scoped to each package.

#### Folder Structure
```ini
.
├── README.md # The decision document.
└── assets # Optional. Referenced images / assets go here.
```

#### Document Structure
The general structure for each decision document is based on our [ADR Template](./assets/TEMPLATE.md).

## Decision Drivers
* decision retraceability
* supports contributor onboarding
* consistency
* long term health of the project
* follow proven software design practices

## Considered Options
* Do not document architecture decisions
* Document architecture decisions on GitHub Wiki
* Document architecture decisions in the repository

## More Information
### Prior Discussions
- [Poll](https://github.com/deven-org/boiler/discussions/1091)
- [docs(all, ui-library): propose ADR format #1090](https://github.com/deven-org/boiler/pull/1090)


### Articles and Resources on ADRs
- [Architecture decision record (ADR) examples for software planning, IT leadership, and template documentation](https://github.com/joelparkerhenderson/architecture-decision-record)
- [Architectural Decision Records - Homepage of the ADR GitHub organization](https://adr.github.io/)
- [Has Your Architectural Decision Record Lost Its Purpose?](https://www.infoq.com/articles/architectural-decision-record-purpose)
