'''
 Rotas da Aplicação
'''

from rest_framework import routers
from kefnum import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet)
router.register(r'desks', views.DeskViewSet)
router.register(r'users', views.UserViewSet)