### 启动两个worker，一个male，一个female
  pm2 start src/queen.js -f --name worker[3000] -- worker 3000
  pm2 start src/queen.js -f --name worker[3001] -- worker 3001
  pm2 start src/queen.js -f --name male[1] -- male 1
  pm2 start src/queen.js -f --name female[1] -- female 1