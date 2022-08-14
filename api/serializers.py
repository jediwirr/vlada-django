from rest_framework import serializers
from .models import Novel, Image, ImageAlbum, VideoFile, VideoAlbum


class NovelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Novel
        fields = ('pk', 'title', 'content')


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('pk', 'album', 'title', 'path')


class ImageAlbumSerializer(serializers.ModelSerializer):
    files = ImageSerializer(many=True)

    class Meta:
        model = ImageAlbum
        fields = ('pk', 'title', 'files')


class VideoFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = VideoFile
        fields = ('pk', 'album', 'title', 'path')


class VideoAlbumSerializer(serializers.ModelSerializer):
    files = VideoFileSerializer(many=True)

    class Meta:
        model = VideoAlbum
        fields = ('pk', 'title', 'files')
