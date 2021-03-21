from django.db import models

# Create your models here.
class Lesson(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=500)
    