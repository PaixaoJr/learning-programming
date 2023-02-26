# Criando primeira branch

```bash
git checkout -b feature/learning-javascript
git branch
```

# Checando quais arquivos estão rastreados

```bash
git status
```

# Adicionando mudança (add)

```bash
# adiciona tudo
git add .

# adiciona arquivo
git add nome-do-arquivo

# adiciona pasta
git add nome-da-pasta

# checar status novamente
git status
```

# Registrando mudança (commit)

```bash
git commit -m "prefixo(js): alguma mensagem"
```

# Verificando o log

```bash
git log
```

# Enviando commits para a nuvem (push)

```bash
# -u serve para criar branch na nuvem, caso não exista na nuvem
git push -u origin nome-da-branch

git push origin master
git push origin feature/learning-javascript
git push -u origin feature/learning-javascript
```