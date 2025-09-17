from django.db import models

class Word(models.Model):
    text = models.CharField(max_length=100)
    language = models.CharField(max_length=20, default='ar')
    audio_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.text} ({self.language})"

class Reward(models.Model):
    user = models.CharField(max_length=100)
    points = models.IntegerField(default=0)
    badges = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user}: {self.points} pts, {self.badges} badges"
