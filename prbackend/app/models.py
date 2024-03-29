from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# class User(AbstractUser):
#     first_name = None
#     last_name = None
#     username = models.CharField(max_length=200, null=False, unique=True)
#     email = models.EmailField(max_length=255, unique=True)
#     phone = models.CharField(max_length=20, unique=True)
#     role = models.EmailField(max_length=255, unique=True)
#     password = models.CharField(max_length=200, null=True)

class User(models.Model):
    fullname = models.CharField(max_length=225, default='')
    empID = models.CharField(max_length=225, null=True)
    desigination = models.CharField(max_length=225, default='')
    username = models.CharField(max_length=225, default='')
    email = models.CharField(max_length=200, default='')
    password = models.CharField(max_length=200, default='')
    role = models.CharField(max_length=200, default='')

class Projects(models.Model):
    project_name = models.CharField(max_length=200, default='')
    img = models.ImageField(upload_to='images/')
    description = models.TextField()
    status = models.CharField(max_length=200, default='')
    empID = models.ForeignKey(User, on_delete=models.CASCADE)



