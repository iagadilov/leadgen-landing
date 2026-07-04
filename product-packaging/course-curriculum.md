# Course curriculum - AI LeadGen OS

## Модуль 0. Start Here

**Цель:** понять, что мы строим и какие границы у продукта.

Уроки:
- что такое AI LeadGen OS;
- почему это не SaaS, не база лидов и не "один промпт";
- что студент получит в конце;
- чего курс не обещает;
- как проходить курс;
- что подготовить до старта: ниша, оффер, минимальный чек, примеры клиентов, каналы.

Практика:
- открыть `START_HERE.md`;
- прочитать `SAFETY.md`;
- зафиксировать главный принцип: drafts-only до human approval.

## Модуль 1. Ниша, оффер и ICP

**Цель:** описать бизнес так, чтобы агент искал не всех подряд, а релевантных кандидатов.

Уроки:
- как описать business context;
- как сформулировать offer через результат клиента;
- как определить good lead;
- как определить bad lead;
- negative ICP;
- success criteria;
- почему "ниша + гео" не является evidence.

Практика:
- заполнить `docs/os/company.md`;
- заполнить `docs/os/offer.md`;
- заполнить `docs/os/icp.md`;
- заполнить `docs/os/negative_icp.md`;
- задать первый campaign profile.

## Модуль 2. AI LeadGen OS Architecture

**Цель:** понять, из каких частей состоит workspace.

Уроки:
- `docs/os/` как бизнес-контекст;
- `memory/` как журнал обучения;
- `commands/` как playbooks;
- `runs/` как история кампаний;
- `data/schemas/lead.schema.json` как единый формат лида;
- `alerts/` как журнал эскалаций;
- approval gates;
- режимы агента: Setup, Research, Review, Learning, Draft Outreach, Approved Send, Inbox Assistant, Auto.

Практика:
- пройти структуру template repo;
- объяснить своими словами, где живёт ICP, где memory, где результаты рана.

## Модуль 3. Setup в Claude Code / Codex

**Цель:** открыть template repo и запустить первый безопасный диалог с агентом.

Уроки:
- как открыть template repo в Claude Code / Codex;
- как агент читает `AGENTS.md` и `CLAUDE.md`;
- как запускать команды;
- как работает `/onboard`;
- как проверять, что агент понял ICP и гейты.

Практика:
- открыть workspace;
- написать агенту стартовую команду;
- пройти `/onboard`;
- проверить пересказ ICP и approval gates.

## Модуль 4. Первый Lead Batch

**Цель:** собрать маленький батч и не перепрыгнуть к массовому outreach.

Уроки:
- small batch 10-20 лидов;
- один campaign profile на batch;
- source и source_url;
- dedup первым;
- enrichment;
- evidence;
- scoring;
- confidence;
- why_relevant;
- needs_enrichment.

Практика:
- создать `runs/<date-slug>/`;
- запустить `/find-leads`;
- запустить `/enrich-leads`;
- запустить `/score-leads`;
- получить `scored_leads.csv`.

## Модуль 5. Review и Memory Patch

**Цель:** научить систему на человеческом review.

Уроки:
- good / maybe / bad;
- почему reasons важнее самой метки;
- strong good rate;
- usable candidate rate;
- bad rate;
- когда источник можно масштабировать;
- Memory Patch Protocol;
- какие правки идут в `docs/os/`, какие в `memory/`, какие в `runs/notes.md`.

Практика:
- провести `/review-batch`;
- записать reasons;
- сформировать Memory Patch;
- применить patch после подтверждения;
- сравнить правила до и после.

## Модуль 6. Outreach Drafts

**Цель:** готовить персональные сообщения только после quality gate.

Уроки:
- кто допускается в outreach;
- personalization_angle;
- evidence_used;
- что нельзя выдумывать;
- неподтверждённый сигнал только как гипотеза;
- human approval;
- draft-only workflow;
- prepare campaign как отдельный гейт.

Практика:
- запустить `/generate-outreach`;
- получить drafts с `approval_required: yes`;
- проверить 3-5 драфтов;
- записать правки тона через Memory Patch.

## Модуль 7. Inbox / Replies

**Цель:** разбирать входящие без хаоса и опасных автоответов.

Уроки:
- классификация входящих;
- interested / question / price / not-now / reject / unsubscribe / off-topic;
- reply playbook;
- drafts;
- escalation rules;
- почему цена, торг, условия и конфликт остаются за владельцем.

Практика:
- заполнить `memory/reply_playbook.md`;
- разобрать несколько типовых входящих;
- подготовить drafts;
- записать эскалации в `alerts/outbox.jsonl`.

## Модуль 8. Масштабирование

**Цель:** расширять систему только после доказанного качества.

Уроки:
- новые источники;
- новые campaign profiles;
- lookalikes;
- увеличение batch size;
- CRM/status flow;
- DFY-level автоматизация;
- где заканчивается курс и начинается внедрение под команду.

Практика:
- выбрать второй источник или второй campaign profile;
- запустить новый small batch;
- сравнить метрики;
- решить: масштабировать, чинить ICP или менять оффер.

