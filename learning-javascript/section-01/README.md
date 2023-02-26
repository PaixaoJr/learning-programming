# Hello world de javascript

- no terminal

```bash
node
```

- com o modo interativo do node aberto, dê o seguinte comando

```javascript
console.log('olá mundo')
```

- output

```text
olá mundo
undefined
```

# Nvm

- Nvm significa Node Virtual Management

- Checando versão em uso do node

```bash
node -v
```

- Instalando versão específica do node

```bash
nvm install 16.13.2
```

- Usando versão específica

```bash
nvm use 16.13.2
```

- Checando novamente a versão do node

```bash
node -v
```

- Onde está localizado no computador o interpretador node me uso

```bash
which node
```

# Criar projeto node

```bash
npm init -y
```

# Variáveis

- Criei uma variavel com seu nome

- Exiba no terminal

- executando código

```bash
node variaveis.js
```

- Criei duas variaveis: uma para o nome e outra para a idade

- O nome deve ser constante(fixo) (const), pois não muda ao longo da vida

- A idade deve ser variável (let), pois muda ao longo da vida

# Escopo de variáveis

- Primeiro busca no escopo da instrução

- Depois busca no escopo acima
