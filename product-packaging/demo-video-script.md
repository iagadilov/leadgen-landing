# Demo video script - 5-8 minutes

## Цель видео

Показать, что AI LeadGen OS - это не SaaS и не набор промптов, а практический workspace, который студент собирает под свою нишу в Claude Code / Codex.

## 0:00-0:40 - Hook / контекст вирусного видео

"Если ты видел моё видео про AI-систему для поиска B2B-клиентов, там могло выглядеть так, будто это просто магическая кнопка: система нашла лидов, поняла нишу, подготовила сообщения.

На самом деле важная часть не в магии и не в одном промпте. Важная часть - в workspace, где AI-агент работает по правилам, учится на review и ничего не отправляет без human approval."

## 0:40-1:20 - Почему это не SaaS

"Я не упаковываю это как SaaS, где ты нажал кнопку и тебе гарантированно пришли клиенты. Это было бы нечестно.

AI LeadGen OS - это практический курс + setup. Ты берёшь template repo, открываешь его в Claude Code или Codex и собираешь систему под свою нишу."

Показать:

- корень template repo;
- `README.md`;
- `START_HERE.md`.

## 1:20-2:10 - Что такое AI LeadGen OS

"Вот из чего состоит система:

- docs/os - бизнес-контекст;
- memory - что система выучила из твоих решений;
- commands - playbooks;
- runs - история кампаний;
- data schema - единый формат лида;
- safety - правила, чтобы агент не сделал опасное действие."

Показать папки:

- `docs/os/`;
- `memory/`;
- `commands/`;
- `runs/`;
- `SAFETY.md`.

## 2:10-3:00 - docs/os

"Сначала мы не ищем лидов. Сначала описываем, кого вообще считаем хорошим лидом.

Вот company, offer, ICP, negative ICP, sources, outreach rules, success criteria, compliance.

Это важно: если ICP размыт, агент будет искать мусор. Поэтому курс начинается не с парсинга, а с настройки правил."

Показать:

- `docs/os/icp.md`;
- `docs/os/negative_icp.md`;
- `docs/os/outreach_rules.md`.

## 3:00-3:50 - commands

"Commands - это не продукт целиком, но это удобный интерфейс к процессу.

Например:

- onboard - настроить контекст;
- find-leads - найти маленький batch;
- score-leads - оценить против ICP;
- review-batch - провести человеческое review;
- learn-from-feedback - записать Memory Patch;
- generate-outreach - подготовить drafts."

Показать:

- `commands/onboard.md`;
- `commands/find-leads.md`;
- `commands/review-batch.md`;
- `commands/generate-outreach.md`.

## 3:50-5:10 - Example run

"Теперь самое важное: example run.

Это вымышленные компании, но настоящая логика. Сначала scored leads. У каждого лида должен быть evidence и why_relevant. Ниша и гео сами по себе не evidence.

Потом review: good, maybe, bad. И не просто метки, а причины. Потому что причины - это топливо системы."

Показать:

- `EXAMPLE_RUN.md`;
- `examples/2026-07-04-example-run/scored_leads.csv`;
- `reviewed_leads.csv`;
- `REVIEW_SUMMARY.md`.

## 5:10-6:10 - Review + Memory Patch

"После review мы не говорим агенту 'понял, запомни'. Так система забывает.

Мы делаем Memory Patch: какие правила обновить в docs/os и memory. Например, какие лиды считать bad, какие maybe требуют дообогащения, какие источники дают мусор."

Показать:

- `MEMORY_PATCH_SUMMARY.md`;
- `memory/learned_rules.md`.

## 6:10-6:50 - Outreach drafts

"Только после review появляются outreach drafts.

Обрати внимание: это не отправка. Каждый draft содержит evidence_used, personalization_angle, что проверить перед отправкой и approval_required: yes.

То есть human approval встроен в процесс."

Показать:

- `OUTREACH_DRAFTS_GOOD.md`;
- строку `approval_required: yes`.

## 6:50-7:30 - Course vs DFY

"Есть два формата.

Первый - курс. Ты проходишь уроки и собираешь workspace сам.

Второй - Done For You. Если не хочешь настраивать сам, я адаптирую AI LeadGen OS под твою нишу или команду: ICP, sources, test batch, review, memory, drafts и передачу процесса."

## 7:30-8:00 - CTA

"Если хочешь собрать сам - заходи в ранний доступ к AI LeadGen OS.

Если хочешь внедрение под ключ - оставь заявку на DFY. В обоих случаях честно: это не кнопка клиентов. Это способ собрать управляемый leadgen workspace, который учится на твоём review."

CTA on screen:

- Купить доступ к курсу
- Оставить заявку на внедрение

