from django.contrib.auth.models import User

from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from .models import Desk, Task

class DeskSerializer(serializers.ModelSerializer):    
    
    class Meta:
        model = Desk
        fields = ('id', 'user', 'nome', 'cor')

class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = ('id', 'user', 'desk', 'descricao', 'pendente', 'ativa', 'data_criacao')

class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        print(str(validated_data))

        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
        )
        validators = [
            UniqueTogetherValidator(
                queryset=User.objects.all(),
                fields=['username', 'email']
            )
        ]