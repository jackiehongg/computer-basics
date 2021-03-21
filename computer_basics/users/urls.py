from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', views.LogoutView.as_view())
]