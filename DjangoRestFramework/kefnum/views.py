from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets

from .models import Desk, Task
from .serializers import DeskSerializer, TaskSerializer, UserSerializer

class DeskViewSet(viewsets.ModelViewSet):
    queryset = Desk.objects.all()
    serializer_class = DeskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer