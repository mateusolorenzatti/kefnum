'''
 Rotas da Aplicação
'''
from django.urls import path
from .views import *

app_name = 'kefnum'
urlpatterns = [
    path('', home, name='home'),
    path('user/', UserViewSet.as_view(), name='user'),
    path('desk/', DeskViewSet.as_view(), name='desk'),
    path('task/', TaskViewSet.as_view(), name='task'),
]
