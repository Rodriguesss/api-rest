# <h1><b>API REST</b></h1>

Foi criado uma interface utilizando Vue.js consumindo dados que são disponilibizados pelo .NET Core junto com Postgresql.

### <h2><b>Objetivo</b></h2>

Construir um projeto simples capaz de operar um CRUD. <br />
<li><b>Tema:</b> Produto

## <h2><b>Tecnologias</b></h2>

<ul>
  <li><b>.Net Core</b></li>
  <li><b>Vue.js</b></li>
  <li><b>Postgresql</b></li>
</ul>


### <h2><b>Rodar Projeto</b></h2>
### Instale o Node Modules
```
npm install
```

### Configurando Postgresql
Entre na pasta 'ProjetoLoja' e procure o arquivo 'appsettings.Development.json'

![Vue.js](https://cdn.discordapp.com/attachments/545281793889402880/562084361265217537/app.png)

Abra-o e configure seu userid e sua password.
### Rodando API

Entre com o terminal dentro da pasta 'ProjetoLoja' e utilize os seguintes comando:
```
dotnet ef database update
```
```
dotnet watch run
```

### Rodando Vue
Abra outro terminal na pasta 'vue_projetoloja' e use o comando a baixo:
```
npm run serve
```


