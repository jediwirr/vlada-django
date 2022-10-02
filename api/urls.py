from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('novels/', views.novels_list, name='novels'),
    path('novel/', views.novel_details, name='details'),
    path('images/', views.image_list, name='images'),
    path('albums/', views.album_list, name='albums'),
    path('albums/<int:pk>', views.album_details, name='album'),
    path('videofiles/', views.video_file_list, name='videofiles'),
    path('videoalbums/', views.video_album_list, name='videoalbums'),
    path('videoalbums/<int:pk>', views.video_album_details, name='videoalbum'),
    path('parentalbums/', views.parent_album_list, name='parentalbums'),
    path('parentalbums/<int:pk>', views.parent_album_details, name='parentalbum'),
]