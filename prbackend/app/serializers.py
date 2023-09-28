from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class PojectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Projects
        fields = '__all__'