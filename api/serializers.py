from rest_framework import serializers
from .models import Novel, Image, ImageAlbum, VideoFile, VideoAlbum, ParentAlbum


class NovelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Novel
        fields = ('pk', 'title', 'content')


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('pk', 'album', 'title', 'path')


class ParentAlbumSerializer(serializers.ModelSerializer):

    class Meta:
        model = ParentAlbum
        fields = ('pk', 'title')


class ImageAlbumSerializer(serializers.ModelSerializer):
    files = ImageSerializer(many=True)
    parent_album = ParentAlbumSerializer()

    class Meta:
        model = ImageAlbum
        fields = ('pk', 'title', 'files', 'parent_album')


class VideoFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = VideoFile
        fields = ('pk', 'album', 'title', 'path')


class VideoAlbumSerializer(serializers.ModelSerializer):
    files = VideoFileSerializer(many=True)

    class Meta:
        model = VideoAlbum
        fields = ('pk', 'title', 'files')
