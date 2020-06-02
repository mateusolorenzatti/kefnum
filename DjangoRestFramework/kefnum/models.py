from django.db import models
from django.contrib.auth.models import User

class Desk(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nome = models.CharField(max_length=20)
        
class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    desk = models.ForeignKey(Desk, on_delete=models.SET_NULL, null=True)

    descricao = models.CharField(max_length=60)
    pendente = models.BooleanField(default=True)
    ativa = models.BooleanField(default=True)

    data_criacao = models.DateTimeField(auto_now_add=True) 