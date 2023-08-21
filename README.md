# Treinamento-fullcycle

Documentação dos itens do treinamento ministrado pela fullccycle

## PROJETOS

- **GOLANG**
  
  **Build**:

   ~~~bash
   docker build --pull --rm -f "projeto_golang/Dockerfile" -t rafades/fullcycle-go:1.0.0 "projeto_golang"
   ~~~

  [**DockerHub**](https://hub.docker.com/repository/docker/rafades/fullcycle-go/general)

- **NODE NGINX**
  
  **subir ambiente**

  ~~~bash
  docker compose -f "projeto_nginx/docker-compose.yaml" up -d --build
  ~~~
  