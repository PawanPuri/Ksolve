# models.py (classroom app)

from django.contrib.auth.models import User
from django.db import models

class Class(models.Model):
    instructor = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class Unit(models.Model):
    classroom = models.ForeignKey(Class, related_name='units', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Session(models.Model):
    unit = models.ForeignKey(Unit, related_name='sessions', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Lecture(models.Model):
    session = models.ForeignKey(Session, related_name='lectures', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title

class Comment(models.Model):
    lecture = models.ForeignKey(Lecture, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    parent = models.ForeignKey('self', null=True, blank=True, related_name='replies', on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.lecture.title}"
