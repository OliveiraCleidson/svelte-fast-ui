---
description: Fecha uma nova versão, atualizando o changelog, criando commit e tag git.
---

# Workflow: Nova Versão (Release)

Siga estes passos para lançar uma nova versão:

1.  **Determinar a Versão (SemVer)**:
    - Analise as mudanças listadas em `## [Unreleased]` no `CHANGELOG.md`.
    - Determine se a atualização é:
      - **MAJOR** (quebra de compatibilidade)
      - **MINOR** (novas funcionalidades compatíveis)
      - **PATCH** (correções de bugs)
    - Verifique a última versão no changelog ou tags git e calcule a próxima.

2.  **Atualizar CHANGELOG.md**:
    - Renomeie a seção `## [Unreleased]` para `## [X.Y.Z] - YYYY-MM-DD`.
    - Crie uma nova seção vazia `## [Unreleased]` no topo para o futuro.

3.  **Formatar Código**:
    - É mandatório rodar a formatação antes de commitar, pois alterações no changelog e package.json podem quebrar o CI.
      // turbo
      Run: npm run format
    - Se falhar, **ABORTAR** o fluxo e verificar o erro.

4.  **Criar Commit de Release**:
    - O título do commit deve seguir o Conventional Commits: `chore(release): vX.Y.Z`.
    - O corpo do commit deve conter uma cópia das notas da versão (o markdown que estava no changelog, em Português).
    - Exemplo de estrutura:

      ```
      chore(release): v1.0.0

      ### Adicionado
      - Nova funcionalidade X

      ### Corrigido
      - Bug Y
      ```

    - Comando sugerido: `git commit -am "chore(release): vX.Y.Z..."`

5.  **Publicar Release (Git & GitHub)**:
    - Faça o push do commit e da tag: `git push origin main --tags` (ajuste 'main' se a branch for outra).
    - Crie a Release no GitHub usando a CLI (`gh`):
      - Comando: `gh release create vX.Y.Z --title "vX.Y.Z" --notes "CONTEUDO_DAS_NOTAS"`
      - **Importante**: Utilize o mesmo conteúdo de notas (em Português) que foi usado no corpo do commit.
    - Se o comando `gh` falhar por autenticação, avise o usuário mas considere o processo git concluído.

6.  **Finalização**:
    - Confirme que a versão foi criada localmente e publicada no GitHub.
