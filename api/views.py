from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Novel, Image, ImageAlbum, ParentAlbum
from .serializers import *


@api_view()
def novels_list(request):
    """
 List  novels
 """
    if request.method == 'GET':
        novels = Novel.objects.all()

        serializer = NovelSerializer(novels, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
            serializer = NovelSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def novel_details(request, pk):
    """
    Retrieve, update or delete a customer by id/pk.
    """
    try:
        novel = Novel.objects.get(pk=pk)
    except Novel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = NovelSerializer(novel, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = NovelSerializer(novel, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        novel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view()
def image_list(request):
    """
 List  images
 """
    if request.method == 'GET':
        images = Image.objects.all()

        serializer = ImageSerializer(images, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
            serializer = ImageSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def video_file_list(request):
    if request.method == 'GET':
        files = VideoFile.objects.all()

        serializer = VideoFileSerializer(files, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VideoFileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


@api_view()
def album_list(request):
    """
 List  albums
 """
    if request.method == 'GET':
        albums = ImageAlbum.objects.all()

        serializer = ImageAlbumSerializer(albums, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
            serializer = ImageAlbumSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def album_details(request, pk):
    """
    Retrieve, update or delete a customer by id/pk.
    """
    try:
        album = ImageAlbum.objects.get(pk=pk)
    except ImageAlbum.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ImageAlbumSerializer(album, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ImageAlbumSerializer(album, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        novel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view()
def video_album_list(request):
    """
 List video albums
 """
    if request.method == 'GET':
        albums = VideoAlbum.objects.all()

        serializer = VideoAlbumSerializer(albums, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
            serializer = VideoAlbumSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def video_album_details(request, pk):
    """
    Retrieve, update or delete a customer by id/pk.
    """
    try:
        album = VideoAlbum.objects.get(pk=pk)
    except VideoAlbum.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VideoAlbumSerializer(album, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VideoAlbumSerializer(album, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        novel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view()
def parent_album_list(request):
    """
 List  albums
 """
    if request.method == 'GET':
        parent_albums = ParentAlbum.objects.all()

        serializer = ParentAlbumSerializer(parent_albums, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ParentAlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def parent_album_details(request, pk):
    """
    Retrieve, update or delete a customer by id/pk.
    """
    try:
        parent_album = ParentAlbum.objects.get(pk=pk)
    except ParentAlbum.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ParentAlbumSerializer(parent_album, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ParentAlbumSerializer(parent_album, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        novel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)