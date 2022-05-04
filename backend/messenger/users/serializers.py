from .models import Client
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ['id', 'username', 'email', 'is_active', 'created', 'updated']
        read_only_field = ['is_active', 'created', 'updated']

