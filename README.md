# Impressionismo para Todos

Site educacional sobre o movimento artístico Impressionismo, com páginas informativas, galeria de artistas e quiz interativo.

## Objetivo

Divulgar conhecimento sobre o Impressionismo francês, Pós-Impressionismo e Impressionismo Brasileiro de forma visual e acessível, funcionando como uma exposição digital interativa.

## Funcionalidades

- Página inicial com navegação para as três vertentes do movimento
- Seção sobre Impressionismo com características e principais artistas
- Galeria de artistas organizada por movimento (Monet, Renoir, Degas, Van Gogh, Cézanne, Gauguin, Visconti, Castagneto, Georgina de Albuquerque)
- Quiz interativo com 10 perguntas, correção automática e pontuação final
- Design responsivo com glassmorphism e animações CSS
- Navegação por âncoras e menu fixo

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, animações, media queries, glassmorphism)
- JavaScript (ES6 classes, DOM manipulation)
- Google Fonts (Dancing Script, Poppins)

## Arquitetura

Site estático de múltiplas páginas, sem frameworks ou dependências de servidor.

```
site-impressionismo/
├── index.html                     # Página inicial com navegação
├── impressionismo.html            # Sobre o Impressionismo
├── artistas.html                  # Galeria de artistas
├── pos-impressionismo.html        # Placeholder
├── impressionismo-brasileiro.html # Placeholder
├── quiz.html                      # Placeholder
├── capa.css / impressionismo.css  # Estilos
├── artistas.css / quiz.css        # Estilos
├── quiz.js                        # Lógica do quiz interativo
└── imagens/                       # Imagens do site
```

> **Nota:** As páginas `pos-impressionismo.html`, `impressionismo-brasileiro.html` e `quiz.html` são placeholders (arquivos vazios). O arquivo `quiz.js` contém a lógica completa do quiz, aguardando a estrutura HTML correspondente.

## Execução

Abra qualquer arquivo `.html` no navegador. Não requer servidor ou build.

```bash
# Ou sirva com um servidor local
python -m http.server 8000
```

## Conhecimentos demonstrados

- Desenvolvimento web front-end com HTML, CSS e JavaScript puros
- Design de interface com glassmorphism e animações CSS
- JavaScript orientado a objetos (classes ES6)
- Manipulação de DOM e eventos
- Responsividade com media queries
- Organização de assets (imagens, estilos, scripts)
- Projeto educacional com curadoria de conteúdo artístico

## Melhorias futuras

- Implementar conteúdo das páginas placeholder
- Adicionar mais artistas e obras
- Expandir quiz com novas perguntas e dificuldades
- Incluir linha do tempo interativa
- Galeria de obras com lightbox

## Licença

MIT
