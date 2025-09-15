# Commit Strategy

## Format
```
type(scope): description
```

## Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **ci**: CI/CD changes
- **build**: Build system changes

## Scopes
- **hero**: Hero section components
- **navbar**: Navigation components
- **animations**: GSAP animations
- **styles**: CSS/styling
- **constants**: Constants and configuration
- **utils**: Utility functions
- **deps**: Dependencies

## Examples

### Features
```
feat(hero): add mask reveal animation
feat(navbar): implement responsive navigation
feat(animations): add scroll-triggered effects
```

### Fixes
```
fix(hero): resolve scale-125 not applying properly
fix(animations): correct GSAP timeline timing
fix(styles): fix mobile responsive issues
```

### Styles
```
style(hero): update mask positioning values
style(animations): improve animation easing
style(navbar): adjust mobile menu styling
```

### Refactoring
```
refactor(hero): extract mask settings to constants
refactor(animations): optimize GSAP performance
refactor(components): improve component structure
```

### Documentation
```
docs(readme): add installation instructions
docs(commit): update commit strategy
docs(api): document component props
```

### Chores
```
chore(deps): update GSAP to latest version
chore(build): configure Vite build settings
chore(ci): setup GitHub Actions
```

## Best Practices

1. **Keep descriptions concise** but descriptive
2. **Use present tense** ("add feature" not "added feature")
3. **Start with lowercase** after the colon
4. **Be specific** about what changed
5. **Reference issues** when applicable: `fix(hero): resolve scale issue #123`

## Current Project Examples

```
feat(hero): implement responsive mask reveal animation
fix(hero): correct GSAP scale property override
style(hero): update mask positioning for mobile
refactor(constants): extract responsive mask settings
docs(commit): add commit strategy guidelines
```
