from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    re_path('', include('frontend.urls')),
    re_path('', include('lessons.urls')),
    re_path('', include('users.urls')),
]
