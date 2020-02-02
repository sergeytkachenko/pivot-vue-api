## 

### DOCKER 

#### Build 

```bash
docker build -f install/Dockerfile -t pivot-vue-api .
```

#### Run 

```bash
docker run -d --name pivot-vue-api --rm -p 3000:3000 pivot-vue-api 
```
