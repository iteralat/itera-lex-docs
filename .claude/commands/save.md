---
description: 'Guarda progreso al finalizar sesion. Actualiza STATE.md y commitea.'
model: 'sonnet'
---

# Guardado de Sesion

## Pasos

### 1. Actualizar `.planning/STATE.md` (sobrescribir)

```markdown
## Sesion Actual

**Fecha**: [YYYY-MM-DD]
**Trabajando en**: [descripción breve]

## Progreso

[tabla actualizada con estado de cada sección/página]

## Decisiones Recientes

[últimas ~10 — condensar si crece]

## Bloqueadores

[ninguno / lista]

## Próxima Acción

[el usuario dicta qué continuar en la próxima sesión]
```

**Max 80 líneas.** Si crece, condensar Decisiones Recientes.

### 2. Commit

```bash
git status --porcelain  # sin cambios → skip
git add -A
git commit -m "<tipo>(<scope>): <descripción en imperativo>"
```

Tipos: feat/fix/docs/chore | Scopes: content/config/style | Max 72 chars | Sin punto final

### 3. Confirmar al usuario

```markdown
## Sesión Guardada ✓

**STATE.md**: actualizado
**Commit**: `<mensaje>`

Próxima sesión: [1 línea de qué sigue]

Podés hacer /clear tranquilo.
```

## Notas

- STATE.md se **SOBRESCRIBE** (no acumula historial)
- La "Próxima Acción" la dicta el usuario en este momento
