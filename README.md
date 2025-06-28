# Fission + K3S

Esta prova de conceito (POC) tem como objetivo explorar o uso de Funções como Serviço (FaaS) em um ambiente Kubernetes leve, utilizando o Fission como framework serverless e o K3s como orquestrador Kubernetes otimizado para ambientes de desenvolvimento e edge computing.

A arquitetura foi provisionada com o auxílio do Helm, facilitando a instalação e configuração dos componentes necessários. As funções serverless foram escritas com NestJS, um framework moderno baseado em Node.js, conhecido por sua robustez e estrutura modular, geralmente utilizado em aplicações backend de larga escala, aqui adaptado para rodar como função serverless.

A proposta da POC é validar a viabilidade técnica de utilizar Fission para desacoplar componentes e acelerar ciclos de desenvolvimento, aproveitando a escalabilidade e simplicidade de gerenciamento que o Fission oferece, ao mesmo tempo em que mantém a familiaridade e organização proporcionadas pelo NestJS.

## K3S 

A distribuição Kubernetes certificada e desenvolvida para IoT e computação de ponta. É um Kubernetes leve e de alta performance, perfeito para ambientes EDGE.

## Install K3S


`curl -sfL https://get.k3s.io | sh - `

## Install Fission

Framework sem servidor nativo do Kubernetes de código aberto

`sudo helm upgrade --install fission fission-charts/fission-all --namespace fission -f ./helm/values.yaml`


## Deploy


` fission function create --name main --env nodejs --code ./dist/main.js`

## Soluções:
- https://fission.io/
- https://k3s.io/