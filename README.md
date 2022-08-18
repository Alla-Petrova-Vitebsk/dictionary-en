# dictionary-en

Слова загружены в mongo в базе learnwords коллекция words(https://drive.google.com/drive/folders/1qKNlQFVfHZyNAiL9kU8gBKeGPJszYz2v?usp=sharing)
Извлечь каталог mongodb на диск D (или C, E)


## 1 запустить локальный сервер mongo (
запусить файл D:\mongodb\bin\mongod.bat
или в cmd набрать команду
mongod --dbpath "d:\mongodb\data")

## 2 склонировать репозиторий и перейти в ветку dictionary-dip 
($ git clone git@github.com:Alla-Petrova-Vitebsk/dictionary-en.git -b dictionary-dip)

Серверная часть (код реализован в каталоге server)

## 3 Перейти в каталог server и установить зависимости
(cd server
npm install)

## 4 запустить локальный сервер express
(npm start
или npm run start:dev)

Часть Frontend (код реализован в каталоге dictionary)
## 5 создать новый терминал и перейти в каталог  dictionary
(cd..
cd dictionary)
Открыть файл index.html с помощью live  server



