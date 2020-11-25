#!/usr/bin/env sh

echo 'Criando o build'
set -x
npm run build
set +x

echo 'Build finalizado.'
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Finalizado...'
