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
    path('desks/modify/<int:desk>', DeskViewSet.as_view(), name='desk'),
    path('tasks/<int:desk>', TaskViewSet.as_view(), name='task_get'),
    path('tasks/modify/<int:task>', TaskViewSet.as_view(), name='task_mod'),
    path('tasks/', TaskViewSet.as_view(), name='task_post'),
    path('deskinfo/<int:desk_id>', DeskInfoViewSet.as_view(), name='deskinfo'),
]
