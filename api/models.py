from django.db import models


class Novel(models.Model):
    title = models.CharField(max_length=500, verbose_name='Название')
    content = models.TextField(blank=True, null=True, verbose_name='Текст')

    class Meta:
        verbose_name = 'Текст'
        verbose_name_plural = 'Тексты'

    def __str__(self):
        return self.title


class ImageAlbum(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название альбома')

    class Meta:
        verbose_name = 'Фотоальбом'
        verbose_name_plural = 'Фотоальбомы'

    def __str__(self):
        return self.title


class Image(models.Model):
    album = models.ForeignKey(ImageAlbum, related_name='files', on_delete=models.CASCADE, blank=True, null=True, verbose_name='Альбом')
    title = models.CharField(max_length=50, blank=True, null=True, verbose_name='Название фото')
    path = models.ImageField(upload_to='pics', blank=True, null=True, verbose_name='Файл')

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Фото'

    def __str__(self):
        return '%s: %s' % (self.title, self.path)


class VideoAlbum(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название альбома')

    class Meta:
        verbose_name = 'Видеоальбом'
        verbose_name_plural = 'Видеоальбомы'

    def __str__(self):
        return self.title


class VideoFile(models.Model):
    album = models.ForeignKey(VideoAlbum, related_name='files', on_delete=models.CASCADE, verbose_name='Альбом')
    title = models.CharField(max_length=50, verbose_name='Название видео')
    path = models.FileField(upload_to='uploads', max_length=100, verbose_name='Файл')

    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'

    def __str__(self):
        return '%s: %s' % (self.title, self.path)
        
        