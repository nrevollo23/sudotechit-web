# Guía de Contribución - SUDOTECH IT Website

## Flujo de Trabajo Git

Seguimos un modelo basado en **Git Flow** adaptado para equipos pequeños:

```
main (producción) ← dev (desarrollo) ← feature/* (funcionalidades)
                              ← bugfix/* (correcciones)
                              ← hotfix/* (urgentes)
```

### 1. Crear una nueva funcionalidad

```bash
# Asegúrate de estar en la rama dev
git checkout dev
git pull origin dev

# Crea una nueva rama de feature
git checkout -b feature/nombre-de-la-funcionalidad
```

### 2. Hacer commits

- Usa mensajes descriptivos y en imperativo
- Sigue el formato: `tipo: descripción`
- Tipos comunes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

```bash
# Ejemplo de buen commit
git add .
git commit -m "feat: añadir esquema de servicios a Sanity"
```

### 3. Mantener la rama actualizada

```bash
# Rebasar con los últimos cambios de dev
git fetch origin
git rebase origin/dev
```

### 4. Crear Pull Request

1. Push a tu rama: `git push origin feature/nombre-de-la-funcionalidad`
2. Crea un Pull Request en GitHub desde tu rama a `dev`
3. Completa la plantilla de PR
4. Espera revisión y aprobación

### 5. Merge a dev

- Solo los mantenedores pueden hacer merge
- Usa "Squash and merge" para mantener el historial limpio
- Elimina la rama después del merge

## Reglas de Commit

✅ **Hacer:**
- Commits pequeños y focados
- Mensajes claros y descriptivos
- Tests para nueva funcionalidad
- Documentación actualizada

❌ **Evitar:**
- Commits gigantes con múltiples cambios
- Mensajes genéricos como "fix bug"
- Código sin revisión
- Breaking changes sin discusión previa

## Convenciones de Nombres

### Ramas
- `feature/nueva-funcionalidad` - Nuevas características
- `bugfix/descripcion-del-bug` - Correcciones
- `hotfix/urgente-produccion` - Parches críticos
- `docs/actualizar-readme` - Documentación
- `refactor/mejorar-codigo` - Refactorización

### Commits
```
feat: añadir componente de portfolio
fix: corregir error en formulario de contacto
docs: actualizar documentación de Sanity
docs: añadir ejemplos de queries Groq
style: formatear código con Prettier
refactor: mejorar estructura de servicios
test: añadir tests para el cliente Sanity
chore: actualizar dependencias
```

## Revisión de Código

### Checklist antes de PR:
- [ ] El código sigue los estilos del proyecto
- [ ] No hay errores de TypeScript
- [ ] Los tests pasan (si aplica)
- [ ] La documentación está actualizada
- [ ] El código está formateado con Prettier
- [ ] No hay comentarios temporales o código muerto
- [ ] Las variables tienen nombres descriptivos

### Proceso de Revisión:
1. Al menos 1 aprobación requerida
2. Todos los checks de CI deben pasar
3. No conflicts con la rama base
4. El PR debe ser revisable (no demasiado grande)

## Deployment

### A GitHub Pages (desde dev):
```bash
npm run deploy
```

### A Producción (main):
1. Merge de `dev` a `main` requiere:
   - Aprobación de al menos 2 mantenedores
   - Todos los tests pasando
   - Versión estable en staging
2. El deployment a producción es automático

## Estructura de Commits para Features Grandes

Para features complejas, divide en commits lógicos:

```bash
# Commit 1: Esquema
git commit -m "feat: añadir esquema base para servicios en Sanity"

# Commit 2: Consultas
git commit -m "feat: implementar queries Groq para servicios"

# Commit 3: Componentes
git commit -m "feat: crear componente ServiceCard"

# Commit 4: Integración
git commit -m "feat: integrar servicios en homepage"
```

## Manejo de Conflictos

Si hay conflictos al rebasar:

```bash
# Cuando git rebase detecte conflictos:
git status  # Ver archivos con conflictos
# Edita los archivos para resolver conflictos
git add .   # Marca como resueltos
git rebase --continue
```

## Buenas Prácticas

1. **Commits atómicos**: Un cambio = un commit
2. **Historial limpio**: Usa `git rebase -i` para reorganizar commits antes de PR
3. **Mensajes útiles**: Piensa en "Este commit hará que el proyecto..."
4. **Documenta decisiones**: Usa comentarios en el código para explicar el "porqué"
5. **Pruebas primero**: Escribe tests antes del código cuando sea posible

## Recursos

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Semantic Versioning](https://semver.org/)