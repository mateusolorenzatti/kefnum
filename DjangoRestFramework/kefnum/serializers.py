from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Desk, Task

class DeskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Desk
        fields = ('user', 'nome')

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ('user', 'desk', 'descricao', 'pendente', 'ativa', 'data_criacao')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

    

    