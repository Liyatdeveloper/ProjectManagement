from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.LoginAPIView, name='LoginAPIView'),
    path('getData/',views.getData, name='getData'),
    path('postData/',views.postData, name='postData'),

    path('LoginAPIView/',views.LoginAPIView, name='LoginAPIView'),
    path('Listprojects/', views.LoginAPIView, name='Listprojects'),
    path('Listemployees/', views.LoginAPIView, name='Listemployees'),
    path('AddprojectData/', views.LoginAPIView, name='AddprojectData'),
    path('AddemployeeData/', views.LoginAPIView, name='AddemployeeData'), 

]