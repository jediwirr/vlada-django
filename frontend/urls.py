from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', views.index),
    path('novels/', views.index),
    path('novel/', views.index),
    path('images/', views.index),
    path('albums/', views.index),
    path('albums/<int:pk>', views.index),
    path('videofiles/', views.index),
    path('videoalbums/', views.index),
    path('videoalbums/<int:pk>', views.index),
    path('parentalbums/', views.index),
    path('parentalbums/<int:pk>', views.index),
    #re_path(r".*", views.index)
]