# Treinamento-fullcycle

Documentação dos itens do treinamento ministrado pela fullccycle

## PROJETOS

### **1. GOLANG**
  
**Informações**:

- Comando para build de imagem
  
~~~bash
docker build --pull --rm -f "projeto_golang/Dockerfile" -t rafades/fullcycle-go:1.0.0 "projeto_golang"
~~~

- [**DockerHub**](https://hub.docker.com/repository/docker/rafades/fullcycle-go/general)

### **2. NODE NGINX**
  
**Informações**

- Comando para subir ambiente

  ~~~bash
  docker compose -f "projeto_nginx/docker-compose.yaml" up -d --build
  ~~~

- **Url do serviço**: http://localhost:8080
  - Para cadastrar um nome coloque na querystring o atributo nome com o valor desejo (ex.: http://localhost:8080?nome=teste)
