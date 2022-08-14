from django.contrib import admin

from .models import Novel, Image, ImageAlbum, VideoFile, VideoAlbum

class ImageAdmin(admin.StackedInline):
    model = Image


class ImageAlbumAdmin(admin.ModelAdmin):
    inlines = [ImageAdmin]

    class Meta:
        model = ImageAlbum


class VideoFileAdmin(admin.StackedInline):
    model = VideoFile


class VideoAlbumAdmin(admin.ModelAdmin):
    inlines = [VideoFileAdmin]

    class Meta:
        model = VideoAlbum


admin.site.register(Novel)
admin.site.register(VideoAlbum, VideoAlbumAdmin)
admin.site.register(ImageAlbum, ImageAlbumAdmin)
