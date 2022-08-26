# dictionary-en

Слова загружены в mongo в базе learnwords коллекция words.
https://drive.google.com/drive/folders/1qKNlQFVfHZyNAiL9kU8gBKeGPJszYz2v?usp=sharing
Извлечь каталог mongodb на диск D (или C, E)

## 1 запустить локальный сервер mongo (
запустить файл D:\mongodb\bin\mongod.bat
или в cmd набрать команду
mongod --dbpath "d:\mongodb\data"

## 2 клонировать репозиторий и перейти в ветку dictionary-dip 
git clone git@github.com:Alla-Petrova-Vitebsk/dictionary-en.git -b dictionary-dip

# Серверная часть (код реализован в каталоге server)

## 3 Перейти в каталог server и установить зависимости
(cd server
npm install)

## 4 запустить локальный сервер
(npm start или npm run start:dev)
В консоли терминала должны появиться строки:
server OK
Connected to DB - OK

# Часть Frontend (код реализован в каталоге dictionary)
В каталоге  dictionary открыть файл index.html с помощью live  server



