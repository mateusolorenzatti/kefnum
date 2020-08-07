
## Script para a instalação de todas as Dependências em ambiente Linux ##
source ../venv/bin/activate

#Django
python3 -m pip install django

#DRF
python3 -m pip install djangorestframework
python3 -m pip install markdown      
python3 -m pip install django-filter  

#Postgersql dependencies
python3 -m pip install psycopg2
python3 -m pip install psycopg2-binary

#Addicional Libs
python3 -m pip install djoser
python3 -m pip install django-cors-headers
