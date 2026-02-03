---
description: Atualiza a seção 'Unreleased' do CHANGELOG.md com as alterações recentes.
---

# Workflow: Preparar Changelog

Siga estes passos para atualizar o changelog com as mudanças atuais:

1.  **Analisar o Contexto**:
    - Execute `git status` e `git diff` (ou `git diff --cached` se já estiver em stage) para ver o que mudou.
    - Se houver muitos arquivos, use `git log --oneline <ultima_tag>..HEAD` para ver o histórico recente se necessário.

2.  **Ler o Changelog Atual**:
    - Leia o arquivo `CHANGELOG.md`. Se não existir, crie-o seguindo o padrão [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
    - O arquivo deve ter uma seção `## [Unreleased]` no topo.

3.  **Identificar Mudanças**:
    - Analise os commits ou o diff seguindo o padrão **Conventional Commits** (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`).
    - Baseado no diff e na explicação do usuário, categorizar as mudanças em Português Brasileiro:
        - `### Adicionado` (para `feat` - Novas funcionalidades)
        - `### Alterado` (para `refactor`, `style`, `chore` - Alterações em funcionalidades existentes)
        - `### Obsoleto` (Funcionalidades que serão removidas em breve)
        - `### Removido` (Funcionalidades removidas)
        - `### Corrigido` (para `fix` - Correções de bugs)
        - `### Segurança` (Correções de vulnerabilidades)

4.  **Atualizar o Arquivo (Senso Crítico)**:
    - **Regra de Ouro**: O `[Unreleased]` representa o **estado final** das mudanças desde a última versão, NÃO um log de operações intermediárias.
    - Antes de adicionar uma nova entrada, verifique se já existe uma entrada relacionada no `[Unreleased]`:
        - **Se algo foi "Adicionado" e depois "Movido"**: Atualize a entrada original com o novo path. Não crie entrada "Alterado".
        - **Se algo foi "Adicionado" e depois "Deletado"**: Remova a entrada por completo. As operações se anulam.
        - **Se algo foi "Alterado" múltiplas vezes**: Mantenha apenas uma entrada "Alterado" descrevendo o resultado final.
    - Adicione novas entradas apenas para mudanças que representem deltas reais em relação à última versão publicada.
    - Escreva as descrições em **Português Brasileiro**, de forma clara e direta.
    - Mantenha a formatação consistente.

5.  **Confirmação**:
    - Mostre ao usuário o que foi adicionado e pergunte se está correto.
