'''
 Rotas da Aplicação
'''
from django.urls import path
from .views import *

app_name = 'kefnum'
urlpatterns = [
    path('', home, name='home'),
    path('newuser/', RegisterUserSet.as_view(), name='newUser'),
    path('user/', UserViewSet.as_view(), name='user'),
    path('desks/', DeskViewSet.as_view(), name='desk'),
    path('tasks/', TaskViewSet.as_view(), name='task'),
]
